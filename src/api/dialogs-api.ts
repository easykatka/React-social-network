import { instance } from "./api";
import { resultCodeEnum, responseResultObject, messagesArrayType, dialogsArrayType } from "../types/types";

export const dialogsAPI = {
	getDialogs() {
		return instance.get(`/dialogs`).then(res => res.data)

	},
	sendMessage(userId: number, body: string) {
		return instance.post<Array<dialogsArrayType>>(`/dialogs/${userId}/messages`, { body: body }).then(res => res.data)
	},
	getMessages(userId: number) {
		return instance.get<responseSendMsg>(`/dialogs/${userId}/messages`).then(res => res.data)
	},
	deleteMessages(messageId: number) {
		return instance.delete(`/dialogs/messages/${messageId}`).then(res => res.data)
	},
	getNewMessagesCount() {
		return instance.get<responseGetMessages>(`/dialogs/messages/new/count`).then(res => res.data)
	},
	startDialog(userId: number) {
		return instance.put<responseResultObject>(`/dialogs/${userId}`).then(res => res.data)
	},
	deleteMessage(messageId: string) {
		return instance.delete<responseResultObject>(`/dialogs/messages/${messageId}
		`).then(res => res.data)
	}
}

//типы
type responseSendMsg = {
	data: {
		message: messagesArrayType
	}
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: resultCodeEnum
}
type responseGetMessages = {
	error: boolean
	items: Array<messagesArrayType>
	totalCount: number
}

