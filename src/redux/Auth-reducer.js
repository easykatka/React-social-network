import {ResultCodes, ResultCodesCaptcha} from "../api/api";
import {stopSubmit} from 'redux-form'
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
//local state
let initialState = {
    userId: null ,
    email: null ,
    login: null ,
    isAuth: false,
    captchaUrl: null 
}
// reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                userId: "adds",
                ...state,
                ...action.payload
            }
        case "GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload
            }
        default :
            return state;
    }
}
// actions
export const actions = {
    setAuthUserData : (userId, email , login , isAuth) => ({
        type: "SET_USER_DATA",
        payload: {userId, email, login, isAuth}
    }),
    getCaptchaUrlSuccess :  (captchaUrl) => ({
        type: "GET_CAPTCHA_URL_SUCCESS",
        payload: {captchaUrl}
    })
}
//thunks
export const getAuthUserData = () => async (dispatch) => {
    const meData = await authAPI.me()                               //
    if (meData.resultCode === ResultCodes.Success) {                              // выкинули .data.resultCode из-за типизации в апи
        let {id, email, login} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodes.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodesCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        const message = loginData.messages.length > 0 ? loginData.messages[0] : "Some Error" //ответ от сервака
        dispatch(stopSubmit("login", {_error: message}))  // login это название формы
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === ResultCodes.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer