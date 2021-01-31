import { loginUserData, resultCodeEnum } from "../../common/types/types";
import { instance } from "./api";
const login ={
	email: 'secondjump@bk.ru',
	password: 'qwaszx',
	rememberMe: true
}
	//апи
export const authAPI = {
	me() {
		return instance.get<responseIsAuthUser>(`auth/me`).then((res) => res.data);
	},
	login(loginUserData: loginUserData) {
		return instance.post<responseLoginUser>('/auth/login', login).then((res) => res.data);
	},
	logout() {
		return instance.delete<responseLogoutUser>(`auth/login`).then(res => res.data);
	},
	getCaptchaUrl() {
		return instance.get<responseCaptchaUrl>(`security/get-captcha-url`).then(res => res.data)
	},
};

	//типы
type responseIsAuthUser = {
	data: { id: number, email: string, login: string }
	resultCode: resultCodeEnum
	messages: Array<string>
	fieldsErrors:Array<string>
}
type responseLoginUser = {
	data: { userId: number }
	resultCode: resultCodeEnum
	messages: Array<string>
}
type responseLogoutUser = {
	resultCode: resultCodeEnum
}
type responseCaptchaUrl = {
	url: string
}

