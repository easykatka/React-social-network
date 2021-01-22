import { instance } from "./api";

export const dialogsAPI = {
	getDialogs() {
		return instance.get(`/dialogs`).then(res => res.data)

	},
	sendMessage(userId, body) {
		return instance.post(`/dialogs/${userId}/messages`, { body: body }).then(res => res.data)
	},
	getMessages(userId) {
		return instance.get(`/dialogs/${userId}/messages`).then(res => res.data)
	},
	deleteMessages(messageId) {
		return instance.delete(`/dialogs/messages/${messageId}`).then(res => res.data)
	},
	getNewMessagesCount() {
		return instance.get(`/dialogs/messages/new/count`).then(res => res.data)
	},
	startDialog(userId) {
		return instance.put(`dialogs/${userId}`).then(res => res.data)
	},
	deleteMessage(messageId) {
		return instance.delete(`dialogs/messages/${messageId}
		`).then(res => res.data)
	}

}

