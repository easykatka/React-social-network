import { profileAPI } from "../../api/profile-api";
import { createSlice } from "@reduxjs/toolkit";


export const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		authUser: null,
		profile: null,
		status: "",
		posts: [{
			userId: null,
			body: "Hello world!",
			date: '10/10/20',
			likesCount: 14,
			isLiked: true,
		},
		{
			userId: 1,
			body: "Lorem uae odit blanditiis temporibusinus odio consequatur placeat accusamus ex",
			date: '8/11/20',
			likesCount: 1,
			isLiked: false,
		},
		{
			userId: null,
			body: "Lorem ipsum dolor sit amet, ct blanditiis temporibus hic ipsum eaque, totam magnam minus eum dolorum reprehenderit rem odio consequatur placeat accusamus ex",
			date: '10/12/20',
			likesCount: 66,
			isLiked: false,
		}],
	},
	reducers: {
		setUserProfile: (state, { payload }) => { state.profile = payload },
		setUserStatus: (state, { payload }) => { state.status = payload },
		setauthUser: (state, { payload }) => { state.authUser = payload },
		setNewAvatar: (state, { payload }) => { state.authUser.photos = state.profile.photos = payload },
		setUserFollowStatus: (state, { payload }) => { state.profile = { ...state.profile, followed: payload } },
		setPost: (state,  {payload} ) =>  {
			state.posts.push(payload)
		},
		setLike:(state,{payload}) => { 
			const item = state.posts[payload.idx]
			item.isLiked = payload.like
			payload.like ? ++item.likesCount : --item.likesCount
		},
	}
})
//action
export const { setLike,setPost, setUserFollowStatus, addPost, setUserProfile, setUserStatus, setauthUser, setNewAvatar } = profileSlice.actions;
//thunk
export const getUserProfile = (id) => async (dispatch) => {
	const profileData = await profileAPI.getProfile(id)
	const profileStatus = await profileAPI.getStatus(id)
	const followStatus = await profileAPI.getFollowStatus(id)
	dispatch(setUserProfile(profileData))
	dispatch(setUserStatus(profileStatus))
	dispatch(setUserFollowStatus(followStatus))
}
export const getAuthUser = id => async (dispatch) => {
	const data = await profileAPI.getProfile(id)
	dispatch(setauthUser(data))
}
export const putNewAvatar = (file) => async (dispatch) => {
	const data = await profileAPI.putNewAvatar(file)
	if (data.resultCode === 0) {
		dispatch(setNewAvatar(data.data.photos))
	}
}
export const putNewStatus = (status) => async (dispatch) => {
	const data = await profileAPI.putNewStatus(status)
	if (data.resultCode === 0) {
		dispatch(setUserStatus(status))
	}
}
export const putNewProfile = (profile) => async (dispatch) => {
	const data = await profileAPI.saveProfile(profile)
	if (data.resultCode === 0) {
		dispatch(getUserProfile(profile.userId))
		dispatch(getAuthUser(profile.userId))
	}
}
export default profileSlice.reducer;

