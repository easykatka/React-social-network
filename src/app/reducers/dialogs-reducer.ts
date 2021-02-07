import { dialogsArrayType, messagesArrayType } from '../../common/types/types'
import { createSlice } from "@reduxjs/toolkit";
import { dialogsAPI } from "../api/dialogs-api";
import { AppDispatch } from '../store';

//типы
const initialState = {
	dialogs: [] as dialogsArrayType[],
	messages: [] as messagesArrayType[] ,
	dialogsFetching: true,
	messagesFething: true,
	newMessagesCount: null as number | null
};

export const dialogsSlice = createSlice({
	name: "dialogs",
	initialState,
	reducers: {
		setDialogsFetching: (state, { payload }) => { state.dialogsFetching = payload },
		setMessagesFetching: (state, { payload }) => {
			state.messagesFething = payload
		},
		setDialogs: (state, { payload }) => {
			state.dialogs = payload
		},
		setMessages: (state, { payload }) => { debugger
			state.messages = payload.items
		},
		setNewMessagesCount: (state, { payload }) => {
			state.newMessagesCount = payload
		},
		setDeletedMessage(state, { payload }) {
			state.messages = state.messages.filter(item => item.id !== payload)
		}
	}
})

//actions
export const { setDeletedMessage, setNewMessagesCount, setMessagesFetching, setDialogsFetching, setDialogs, setMessages } = dialogsSlice.actions;
//thunks
export const getNewMessagesCount = () => async (dispatch: AppDispatch) => {
	const count = await dialogsAPI.getNewMessagesCount()
	dispatch(setNewMessagesCount(count))
}
export const getDialogs = () => async (dispatch: AppDispatch) => {
	dispatch(setDialogsFetching(true));
	// обновить chatnavbar
	const data = await dialogsAPI.getDialogs();
	dispatch(setDialogsFetching(false));
	dispatch(setDialogs(data))
}
export const getMessages = (id: number) => async (dispatch: AppDispatch) => {
	dispatch(setMessagesFetching(true));
	const response = await dialogsAPI.getMessages(id);
	dispatch(setMessagesFetching(false));
	dispatch(setMessages(response))
	// обновить chatnavbar
	const data = await dialogsAPI.getDialogs()
	dispatch(setDialogs(data))
}
export const sendMessage = (userId: number, body: string) => async (dispatch: AppDispatch) => {
	await dialogsAPI.sendMessage(userId, body)
	dispatch(getMessages(userId))
	// обновить chatnavbar
	const data = await dialogsAPI.getDialogs()
	dispatch(setDialogs(data))
}
export const deleteMessage = (messageId: string, userId: number) => async (dispatch: AppDispatch) => {
	const data = await dialogsAPI.deleteMessage(messageId)
	if (data.resultCode === 0) {
		dispatch(getMessages(userId))
		dispatch(setDeletedMessage(messageId))
	}
}

export default dialogsSlice.reducer;
