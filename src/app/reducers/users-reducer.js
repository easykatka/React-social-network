import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/users-api";

export const usersSlice = createSlice({
	name: "users",
	initialState: {
		users: [],
		pageSize: 100,
		totalUsersCount: 0,
		currentPage: 30,
		isFetching: true,
		followingInProgress: [], // array of followed users
	},
	reducers: {
		setIsFetching: (state, action) => { 
			state.isFetching = action.payload;
		},
		setUsers: (state, action) => { 
			state.users = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setTotalUsersCount: (state, action) => { 
			state.totalUsersCount = action.payload;
		},
		toggleFollow: (state, payload) => {
			state.users = state.users.map(user => {
				if (user.id === payload.userId) {
					return { ...user, followed: !user.followed }
				}
				return user
			})
		},
		setFollowingInProgress: (state, payload) => { debugger
			state.followingInProgress = payload.isFetching
				? [...state.followingInProgress, payload.userId]                     //грузит фолоу=тру=добавляем в массив юсерид
				: state.followingInProgress.filter(id => id !== payload.userId) //   при вызове фолс=удаляет нужный айди из массива
		}
	}});
//actions
export const {
	setIsFetching,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleFollow,
	setFollowingInProgress
} = usersSlice.actions;
//thunk
export const getUsers = (page, pageSize) => {
	return async (dispatch) => {
		dispatch(setIsFetching(true)); //крутилка
		dispatch(setCurrentPage(page));
		const data = await usersAPI.getUsers(page, pageSize);
		dispatch(setIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
	};
};
export const followUser = (userId) => {
	return async (dispatch) => {
		dispatch(setFollowingInProgress(true, userId))
		let response = await usersAPI.followAPI(userId)
		if (response.resultCode === 0) {
			dispatch(toggleFollow(userId))
		}
		dispatch(setFollowingInProgress(false, userId))
	}
}
export const unfollowUser = (userId)  => {
	return async (dispatch) => {
		dispatch(setFollowingInProgress(true, userId))
		let response = await usersAPI.unFollowAPI(userId)
		if (response.resultCode === 0) {
			dispatch(toggleFollow(userId))
		}
		dispatch(setFollowingInProgress(false, userId))
	}
}

export default usersSlice.reducer;
