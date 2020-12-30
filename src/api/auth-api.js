import { instance } from "./api";

export const authAPI = {
	
  me() {
    return instance.get(`auth/me`).then((res) => res.data);
  },
  login(email, password, rememberMe = false, captcha) { 
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
  getCaptchaUrl() {
	return instance.get(`security/get-captcha-url`).then(res => res.data)
},
};
