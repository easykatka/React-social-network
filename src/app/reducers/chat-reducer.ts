
import { chatAPI, ChatMessageAPIType, StatusType } from '../api/chat-api'
import { v1 } from 'uuid'
import { AppDispatch } from '../store'
import { createSlice } from '@reduxjs/toolkit';

type ChatMessageType = ChatMessageAPIType & { id: string }

export const chatSlice = createSlice({
	name: "chat",
	initialState: {
		messages: [] as ChatMessageType[],
		status: 'pending' as StatusType
	},
	reducers: {
		messagesReceived: (state, { payload }) => { 
			if (state.messages.length != payload.length)  {state.messages = [...state.messages, ...payload.map((m: any) => ({ ...m, id: v1() }))]
				.filter((_, index, array) => index >= array.length - 100)
		}},
		statusChanged: (state, { payload }) => {
			state.status = payload
		}

	}
})

export const { messagesReceived, statusChanged } = chatSlice.actions;

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null


const newMessageHandlerCreator = (dispatch: AppDispatch) => {
	if (_newMessageHandler === null) {
		_newMessageHandler = (messages) => {
			dispatch(messagesReceived(messages))
		}
	}
	return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null


const statusChangedHandlerCreator = (dispatch: AppDispatch) => {
	if (_statusChangedHandler === null) {
		_statusChangedHandler = (status) => {
			dispatch(statusChanged(status))
		}
	}
	return _statusChangedHandler
}

export const startMessagesListening = () => async (dispatch: AppDispatch) => {
	chatAPI.start()
	chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
	chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))

}
export const stopMessagesListening = () => async (dispatch: AppDispatch) => {
	chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
	chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
	chatAPI.stop()
}

export const sendMessage = (message: string) => async () => {
	chatAPI.sendMessage(message)
}


export default chatSlice.reducer

