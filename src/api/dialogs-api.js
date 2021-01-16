import { instance } from "./api";

export const dialogsAPI = {
	getAllDialogs() {
		return instance.get(`/dialogs`).then(response => response.data)
	},
	sendMessage(userId, message: string) {
		return instance.post(`/dialogs/${userId}/messages`, { body: message }).then(response => response.data)
	},
	getMessages(userId) {
		return instance.get(`/dialogs/${userId}/messages`).then(response => response.data)
	},
	deleteMessages(messageId: string) {
		return instance.delete(`/dialogs/messages/${messageId}`).then(response => response.data)
	},
	startDialog(userId) {
		return instance.put(`/dialogs/${userId}`).then(response => response.data)
	},
}

