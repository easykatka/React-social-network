import {stopSubmit} from "redux-form";
import {profileAPI} from "../api/profile-api";
// local state
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}] ,
    profile: null ,
    status: "",
    formUpdate: true
}
// reducer
const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST": {
            let body = action.AddPostBody
            return {
                ...state,
                posts:
                    [...state.posts, {id: 10, message: body, likesCount: 0}]
            }
        }
        case "SET_USER_PROFILE" : {
            return {...state, profile: action.profile}
        }
        case "SET_STATUS" :
            return {...state, status: action.status}
        case "SET_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos} }
        case "PROFILE_FORM_UPDATE":
            let toggle = state.formUpdate
            return {...state, formUpdate: !toggle}
        default :
            return state;
    }
}
// action creators
export const actions = {
    addPostActionCreator : (AddPostBody) => ({type: "ADD_POST", AddPostBody} ),
    setUserProfile : (profile) => ({type: "SET_USER_PROFILE", profile} ),
    setStatus :  (status) => ({type: "SET_STATUS", status} ),
    savePhotoSuccess :  (photos) => ({type: "SET_PHOTO_SUCCESS", photos} ),
    profileFormUpdate : () => ({type: "PROFILE_FORM_UPDATE"} )
}
//thunks
export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)

    dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId) => async (dispatch) => {         // санка при вызове getstatus , делает запрос getstatus
    // на сервер
    const response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response.data))                 // диспатчит статус в стейт
}
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        if (userId !== null)
        {dispatch(getUserProfile(userId))
        dispatch(actions.profileFormUpdate())}
        else throw new Error("UserId cant be null")
    } else if (data.resultCode === 1) {
        const parsed = data.messages[0].match(/Contacts->(\w+)/)[1]   // прикольно,но ловерит всю строчку
        const slised = parsed[0].toLowerCase() + parsed.slice(1)
        dispatch(stopSubmit("profileg", {contacts: {[slised]: `type valid url format for ${slised}`}}))
    }
}

export default profilesReducer;