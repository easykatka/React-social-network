import { loginUserData, resultCodeEnum } from "../../common/types/types";
import { instance } from "./api";

//апи
export const authAPI = {
	me() {
		return instance.get<responseIsAuthUser>(`auth/me`).then((res) => res.data);
	},
	login(loginUserData: loginUserData) {
		return instance.post<responseLoginUser>('/auth/login', loginUserData).then((res) => res.data);
	},
	logout() {
		return instance.delete<responseLogoutUser>(`auth/login`).then(res => res.data);
	},
	getCaptchaUrl() {
		return instance.get<responseCaptchaUrl>(`security/get-captcha-url`).then(res => res.data)
	},
};

//типы
interface responseIsAuthUser {
	data: { id: number, email: string, login: string }
	resultCode: resultCodeEnum
	messages: Array<string>
	fieldsErrors: Array<string>
}
interface responseLoginUser {
	data: { userId: number }
	resultCode: resultCodeEnum
	messages: Array<string>
}
interface responseLogoutUser {
	resultCode: resultCodeEnum
}
interface responseCaptchaUrl {
	url: string
}

