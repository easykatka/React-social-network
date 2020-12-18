import {createSelector} from "reselect";


export const reqUsersSelector= (state) => state.userPage.users


export const getUser = createSelector(reqUsersSelector ,(users) =>
{return users.filter(u => true) })


export const getPageSize = (state) => {
	return state.userPage.pageSize
}
export const getTotalUsersCount = (state) => {
	return state.userPage.totalUsersCount
}
export const getCurrentPage = (state) => {
	return state.userPage.currentPage
}
export const getIsFetching = (state) => {
	return state.userPage.isFetching
}
export const getFollowingInProgress = (state) => {
	return state.userPage.followingInProgress
}
