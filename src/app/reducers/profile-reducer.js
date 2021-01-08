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
		setUserPhoto: () => {},
		setAuthUser: (state,action) => {state.AuthUser = action.payload},
		setNewAvatar:(state,action) => {state.AuthUser = action.payload}
		

		
	  },
	},
)
//action
export const { addPost,  setUserProfile , setUserStatus,setUserPhoto,setAuthUser,setNewAvatar} = profileSlice.actions;
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
    if (data.resultCode === 0) {
        dispatch(setNewAvatar(data.data.photos))
    }
}

	
export default profileSlice.reducer;



// const profilesReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case "SET_PHOTO_SUCCESS":
//             return {...state, profile: {...state.profile, photos: action.photos} }
//         case "PROFILE_FORM_UPDATE":
//             let toggle = state.formUpdate
//             return {...state, formUpdate: !toggle}
//         default :
//             return state;
//     }
// }

// export const updateStatus = (status) => async (dispatch) => {
//     const data = await profileAPI.updateStatus(status)
//     if (data.resultCode === 0) {
//         dispatch(actions.setStatus(status))
//     }
// }

// export const saveProfile = (profile) => async (dispatch, getState) => {
//     const userId = getState().auth.userId
//     const data = await profileAPI.saveProfile(profile)
//     if (data.resultCode === 0) {
//         if (userId !== null)
//         {dispatch(getUserProfile(userId))
//         dispatch(actions.profileFormUpdate())}
//         else throw new Error("UserId cant be null")
//     } else if (data.resultCode === 1) {
//         const parsed = data.messages[0].match(/Contacts->(\w+)/)[1]   // прикольно,но ловерит всю строчку
//         const slised = parsed[0].toLowerCase() + parsed.slice(1)
//         // dispatch(stopSubmit("profileg", {contacts: {[slised]: `type valid url format for ${slised}`}}))
//     }
// }

