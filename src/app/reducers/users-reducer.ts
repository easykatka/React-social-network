import { createSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../api/profile-api";
import { usersAPI } from "../api/users-api";
import { allUsersItemType } from "../../common/types/types";
import { AppDispatch } from "../store";
import { setUserFollowStatus } from "./profile-reducer";

const initialState = {
	users: [] as Array<allUsersItemType>,
	pageSize: 100,
	totalUsersCount: 5000,
	currentPage: 0,
	isFetching: true,
	followingInProgress: [] as Array<string>,
	filter: {
		searchTerm: "",
		friend: 'null',
	}
}

export const usersSlice = createSlice({
	name: "users",
	initialState
	,
	reducers: {
		setIsFetching: (state, action) => { state.isFetching = action.payload; },
		setUsers: (state, action) => { state.users = action.payload; },
		setCurrentPage: (state, action) => { state.currentPage = action.payload; },
		setTotalUsersCount: (state, action) => { state.totalUsersCount = action.payload; },
		toggleFollow: (state, { payload }) => {
			state.users = state.users.map(user => {
				if (user.id === payload) { return { ...user, followed: !user.followed } }
				return user
			})
		},
		setFollowingInProgress: (state, { payload: { isFetching, userId } }) => {
			state.followingInProgress = isFetching ? [...state.followingInProgress, userId]
				: state.followingInProgress.filter(id => id !== userId)
		},
		setPageSize: (state, { payload }) => {
			state.pageSize = payload
			state.currentPage = 0
		},
		setFilter: (state, { payload }) => { 
			state.currentPage = 0
			state.filter = { ...state.filter, ...payload }
		},
	}
});
//actions
export const { setFilter,
	setCurrentPage,
	setPageSize,
	setIsFetching,
	setUsers,
	setTotalUsersCount,
	toggleFollow,
	setFollowingInProgress,
} = usersSlice.actions;
//thunk
export const getUsers = (page:number, pageSize:number, searchTerm:string, friend:string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(page));
		const data = await usersAPI.getUsers(page + 1, pageSize, searchTerm, friend);
		dispatch(setIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
	};
};
export const getFriends = (friend:string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(setIsFetching(true));
		const data = await usersAPI.getUsers(1, 100, '', friend);
		dispatch(setUsers(data.items))
		dispatch(setIsFetching(false));

	}
}
export const followUser = (userId:number, follow:boolean) => {
	return async (dispatch: AppDispatch) => {
		dispatch(setFollowingInProgress({ isFetching: true, userId }))
		const response = !follow ? await usersAPI.followAPI(userId) : await usersAPI.unFollowAPI(userId)
		const followStatus = await profileAPI.getFollowStatus(userId)
		if (response.resultCode === 0) {
			dispatch(toggleFollow(userId))
			dispatch(setUserFollowStatus(followStatus))
		}
		dispatch(setFollowingInProgress({ isFetching: false, userId }))
	}
}

export default usersSlice.reducer;
