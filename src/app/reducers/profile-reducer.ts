import { profileAPI } from "../api/profile-api";
import { createSlice } from "@reduxjs/toolkit";
import { postType, profileDataType, resultCodeEnum } from '../../common/types/types'
import { posts } from "../../common/posts";
import { AppDispatch } from "../store";

export const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		authUser: {} as profileDataType,
		profile: {} as profileDataType,
		status: "",
		posts: posts as Array<postType>,
		isLoading: true,
		isError: '',
		avatarIsLoading: false,
	},
	reducers: {
		setUserProfile: (state, { payload }) => { state.profile = payload },
		setUserStatus: (state, { payload }) => { state.status = payload },
		setauthUser: (state, { payload }) => { state.authUser = payload },
		setNewAvatar: (state, { payload }) => { state.authUser.photos = state.profile.photos = payload },
		setUserFollowStatus: (state, { payload }) => { state.profile = { ...state.profile, followed: payload } },
		setPost: (state, { payload }) => {
			state.posts.push(payload)
		},
		setLike: (state, { payload }) => {
			const item = state.posts[payload.idx]
			item.isLiked = payload.like.checked
			payload.like.checked ? ++item.likesCount : --item.likesCount
		},
		setIsLoading: (state, { payload }) => { state.isLoading = payload },
		setIsError: (state, { payload }) => { state.isError = payload },
		setAvatarIsLoading: (state, { payload }) => { state.avatarIsLoading = payload }
	}
})
//action
export const { setAvatarIsLoading, setIsError, setIsLoading, setLike, setPost, setUserFollowStatus, setUserProfile, setUserStatus, setauthUser, setNewAvatar } = profileSlice.actions;
//thunk
export const getUserProfile = (id: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(setIsLoading(true))
		const profileData = await profileAPI.getProfile(id)
		const profileStatus = await profileAPI.getStatus(id)
		const followStatus = await profileAPI.getFollowStatus(id)
		dispatch(setUserProfile(profileData))
		dispatch(setUserStatus(profileStatus))
		dispatch(setUserFollowStatus(followStatus))
	}
	catch (error) {
		dispatch(setIsError(error))
	}
	finally {
		dispatch(setIsLoading(false))
	}
}
export const getAuthUser = (id: number) => async (dispatch: AppDispatch) => {
	const data = await profileAPI.getProfile(id)
	dispatch(setauthUser(data))
}
export const updateAvatar = (file: File) => async (dispatch: AppDispatch) => {
	dispatch(setAvatarIsLoading(true))
	const data = await profileAPI.updateAvatar(file)
	if (data.resultCode === resultCodeEnum.success) {
		dispatch(setNewAvatar(data.data.photos))
	}
	dispatch(setAvatarIsLoading(false))
}
export const updateStatus = (status: string) => async (dispatch: AppDispatch) => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === resultCodeEnum.success) {
		dispatch(setUserStatus(status))
	}
}
export const putNewProfile = (profile: profileDataType) => async (dispatch: AppDispatch) => {
	const data = await profileAPI.updateProfile(profile)
	if (data.resultCode === resultCodeEnum.success) {
		dispatch(getUserProfile(profile.userId))
		dispatch(getAuthUser(profile.userId))
	}
}
export default profileSlice.reducer;



