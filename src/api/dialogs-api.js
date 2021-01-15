import { instance } from "./api";

export const dialogsAPI = {
	putNewDialog(userId) { 
		return instance.post(`dialogs/${userId}/messages` , {message:"hello"}).then(res => res.data)
	
	
	}}