import { createSlice } from '@reduxjs/toolkit'
import { authAPI } from '../api/auth-api'
import { loginUserData, resultCodeEnum } from '../../common/types/types'
import { AppDispatch } from '../store'

//типы
const initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false ,
	captchaUrl: null as string | null,
	errorMessage: null as string | null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCaptchaUrl: (state, action) => { state.captchaUrl = action.payload },
		setauthUserData: (state, action) => {
			return { ...state, ...action.payload }
		},
		setErrorMessage: (state, action) => { state.errorMessage = action.payload },
	},
})
//actions
export const { setCaptchaUrl, setauthUserData, setErrorMessage } = authSlice.actions
//thunks
export const getCaptcha = () => async (dispatch: AppDispatch) => {
	const { url } = await authAPI.getCaptchaUrl()
	dispatch(setCaptchaUrl(url))
}
export const logout = () => async (dispatch: AppDispatch) => {	
	const response = await authAPI.logout()
	if (response.resultCode === resultCodeEnum.success) {
		dispatch(setauthUserData({ id: null, email: null, login: null, isAuth: false }))
	}
}
export const sendLogin = (loginUserData: loginUserData) => async (dispatch: AppDispatch) => {
	const loginData = await authAPI.login(loginUserData)
	if (loginData.resultCode === resultCodeEnum.success) {
		dispatch(getAuthUserData())
	} else {
		if (loginData.resultCode === resultCodeEnum.captcha) {
			dispatch(getCaptcha())
		}
		const serverError = loginData.messages.length > 0 ? loginData.messages[0] : 'Some Error'
		dispatch(setErrorMessage(serverError))
	}
}
export const getAuthUserData = () => async (dispatch: AppDispatch) => {
	const response = await authAPI.me()
	if (response.resultCode === resultCodeEnum.success) { 
		dispatch(setauthUserData({...response.data,isAuth:true})
		)
	}
}
export default authSlice.reducer
