
import { createSlice } from "@reduxjs/toolkit";
import {usersAPI} from "../../api/users-api";
//local state
let initialState = {
	users: [] ,
	pageSize: 25,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []  //array of users ids
}


export const usersSlice = createSlice ({
	name: 'users',
	initialState : {
		users: [] ,
		pageSize: 25,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: true,
		followingInProgress: []  //array of users ids
	},
	reducers: {
		setIsFetching: (state,action) => { state.isFetching = action.payload },
		setUsers: (state,action) => { 
			 state.users = action.payload },
		setCurrentPage:(state,action) => {state.currentPage = action.payload},
		setTotalUsersCount:(state,action) => {state.totalUsersCount = action.payload}

	  },
	},
)

export const { setIsFetching,  setUsers , setCurrentPage ,setTotalUsersCount} = usersSlice .actions;

  export const getUsersThunk = (page, pageSize)  => {
	return async (dispatch) => {
		dispatch(setIsFetching(true)) //крутилка
		dispatch(setCurrentPage(page))
		const data = await usersAPI.getUsers(page, pageSize)
		
		dispatch(setIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
	}
}
// export const followThunkCreator = (userId)  => {
// 	return async (dispatch) => {
// 		dispatch(actions.toggleFollowingProgress(true, userId))
// 		let response = await usersAPI.followAPI(userId)
// 		if (response.resultCode === 0) {
// 			dispatch(actions.toggleFollow(userId))
// 		}
// 		dispatch(actions.toggleFollowingProgress(false, userId))
// 	}
// }
// export const unfollowThunkCreator = (userId)  => {
// 	return async (dispatch) => {
// 		dispatch(actions.toggleFollowingProgress(true, userId))
// 		let response = await usersAPI.unFollowAPI(userId)
// 		if (response.resultCode === 0) {
// 			dispatch(actions.toggleFollow(userId))
// 		}
// 		dispatch(actions.toggleFollowingProgress(false, userId))
// 	}
// }

  export default usersSlice.reducer;


























// // reducer
// const usersReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'TOGGLE_FOLLOW':
// 			return {
// 				...state, users: updateObjectInArray(state.users , action.userId , "id"  )
// 			}
// 		case 'SET_USERS': {
// 			return {...state, users: action.users}
// 		}
// 		case 'SET_CURRENT_PAGE': {
// 			return {...state, currentPage: action.currentPage}
// 		}
// 		case 'TOTAL_COUNT': {
// 			return {...state, totalUsersCount: action.count}
// 		}
// 		case 'TOGGLE_IS_FETCHING': {
// 			return {...state, isFetching: action.isFetching}
// 		}
// 		case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
// 			return {
// 				...state, followingInProgress:
// 					action.isFetching                                                   // иф
// 						? [...state.followingInProgress, action.userId]                     //грузит фолоу=тру=добавляем в массив юсерид
// 						: state.followingInProgress.filter(id => id !== action.userId) //   при вызове фолс=удаляет нужный айди из массива
// 			}
// 		}
// 		default :
// 			return state;
// 	}
// }
// // actions
// export const actions = {
// 	setTotalUsersCount: (count) => ({type: 'TOTAL_COUNT', count}),
// 	setCurrentPage: (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage}),
// 	toggleFollow: (userId) => ({type: 'TOGGLE_FOLLOW', userId}),
// 	setUsers: (users) => ({type: 'SET_USERS', users}),
// 	setIsFetching: (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching}),
// 	toggleFollowingProgress: (isFetching, userId) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId})
// }
// //Thunks
// export const getUsersThunkCreator = (page, pageSize)  => {
// 		return async (dispatch) => {
// 			// let a = getState().
// 			dispatch(actions.setIsFetching(true)) //крутилка
// 			dispatch(actions.setCurrentPage(page))
// 			let data = await usersAPI.getUsers(page, pageSize)
// 			dispatch(actions.setIsFetching(false))
// 			dispatch(actions.setUsers(data.items))
// 			dispatch(actions.setTotalUsersCount(data.totalCount))
// 		}
// 	}