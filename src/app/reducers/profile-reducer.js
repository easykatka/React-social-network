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
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Et non minima quae odit blanditiis temporibus hic ipsum eaque, totam magnam minus eum dolorum reprehenderit rem odio consequatur placeat accusamus ex",
			date: '10/12/20',
			likesCount:5,
		}],
	},
	reducers: {
		setUserProfile: (state, action) => { state.profile = action.payload },
		setUserStatus: (state, action) => { state.status = action.payload },
		setauthUser: (state, action) => { state.authUser = action.payload },
		setNewAvatar: (state, action) => { state.authUser.photos = state.profile.photos = action.payload },
		setUserFollowStatus: (state, { payload }) => { state.profile = { ...state.profile, followed: payload } }
	},
},
)
//action
export const { setUserFollowStatus, addPost, setUserProfile, setUserStatus, setauthUser, setNewAvatar } = profileSlice.actions;
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

