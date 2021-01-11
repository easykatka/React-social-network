import {profileAPI} from "../../api/profile-api";
import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice ({
	name: 'profile',
	initialState : {
		AuthUser: null,
		profile: null ,
		status: "",
		formEdit: false,
		formError: ""
	},
	reducers: {
		setUserProfile: (state,action) => {state.profile = action.payload},
		setUserStatus: (state,action) => {state.status = action.payload},
		setAuthUser: (state,action) => {state.AuthUser = action.payload},
		setNewAvatar:(state,action) => {state.AuthUser.photos = state.profile.photos = action.payload},
		setFormEdit:(state,{payload}) => {state.formEdit = payload} ,
		setFormError:(state,{payload}) => {state.formError = payload}
	  },
	},
)
//action
export const { setFormError,setFormEdit , addPost,  setUserProfile , setUserStatus,setAuthUser,setNewAvatar} = profileSlice.actions;
//thunk
export const getUserProfile = (id) => async (dispatch) => {
	const profileData = await profileAPI.getProfile(id)
	const profileStatus = await profileAPI.getStatus(id)
	dispatch(setUserProfile(profileData))
	dispatch(setUserStatus(profileStatus))     
}
export const getAuthUser = id => async(dispatch) =>{
	const data = await profileAPI.getProfile(id)
	dispatch(setAuthUser(data))
}
export const putNewAvatar = (file) => async (dispatch) => {
	const data = await profileAPI.putNewAvatar(file)
	console.log(data.data.photos)
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
		dispatch(setFormEdit(false))
    } else if (data.resultCode === 1) {
		console.log(data.messages)
		const parsed = data.messages[0].match(/Contacts->(\w+)/)[1] 
		const slised = parsed[0].toLowerCase() + parsed.slice(1)
		dispatch(setFormError(slised))
		// dispatch(stopSubmit("profileg", {contacts: {[slised]: `type valid url format for ${slised}`}}))
    }
}
export default profileSlice.reducer;

