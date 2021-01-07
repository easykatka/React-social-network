
import { createSlice } from "@reduxjs/toolkit";
import {authAPI} from "../../api/auth-api";

export const authSlice = createSlice ({
	name: 'auth',
	initialState: {
		id: null ,
		email: null ,
		login: null ,
		isAuth: false,
		captchaUrl: null,
		errorMessage: null 
	},
	reducers: {
	  setCaptchaUrl: (state,action) => {
		state.captchaUrl = action.payload
	  },
	  setAuthUserData: (state,action) => { 
		return {state,...action.payload}
	  },
	  setErrorMessage: (state,action) => {
		  state.errorMessage = action.payload
	  }
	},
  });
// экшины
  export const { setCaptchaUrl,  setAuthUserData , setErrorMessage} = authSlice.actions;
// санка получения урла капчи
  export const getCaptchaThunk = () =>  async dispatch => {
    const data = await authAPI.getCaptchaUrl()
    const captchaUrl = data.url
	dispatch(setCaptchaUrl(captchaUrl))
}
// логаут
export const logout = () => async dispatch => {
    const response = await authAPI.logout()
	if (response.data.resultCode === 0 ) {dispatch(setAuthUserData({id:null,email:null, login:null, isAuth:false})) }}
	
export const loginThunk = (email, password, rememberMe , captcha ) => async dispatch => {
	const loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === 0) { console.log(loginData)
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === 10) {
            dispatch(getCaptchaThunk())
        }
        const serverError = loginData.messages.length > 0 ? loginData.messages[0] : "Some Error"
        dispatch(setErrorMessage(serverError)) 
    }
}
// получение данных	
export const getAuthUserData = () => async (dispatch) => {
    const meData = await authAPI.me()                              
    if (meData.resultCode === 0 )	 {           
		meData.data.isAuth=true                
    
        dispatch(setAuthUserData(meData.data ))
    }
}
export default authSlice.reducer;
 


