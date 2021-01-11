import {profileAPI} from "../../api/profile-api";
import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice ({
	name: 'profile',
	initialState : {
		AuthUser: null,
		profile: null ,
		status: "",
		formUpdate: true
	},
	reducers: {
		setUserProfile: (state,action) => {state.profile = action.payload},
		setUserStatus: (state,action) => {state.status = action.payload},
		setAuthUser: (state,action) => {state.AuthUser = action.payload},
		setNewAvatar:(state,action) => {state.AuthUser.photos = state.profile.photos = action.payload}
	  },
	},
)
//action
export const { addPost,  setUserProfile , setUserStatus,setAuthUser,setNewAvatar} = profileSlice.actions;
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
    } else if (data.resultCode === 1) {
        // const parsed = data.messages[0].match(/Contacts->(\w+)/)[1]   // прикольно,но ловерит всю строчку
        // const slised = parsed[0].toLowerCase() + parsed.slice(1)
        // dispatch(stopSubmit("profileg", {contacts: {[slised]: `type valid url format for ${slised}`}}))
    }
}
export default profileSlice.reducer;

