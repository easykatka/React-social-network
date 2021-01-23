import { AssignmentReturnSharp } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";
import { dialogsAPI } from "../../api/dialogs-api";

export const dialogsSlice = createSlice({
	name: "dialogs",
	initialState: {
		dialogs: [],
		dialogsFetching: false,
		messages: [],
		messagesFething: false,
		newMessagesCount: null,
	},
	reducers: {
		setDialogsFetching: (state, { payload }) => { state.dialogsFetching = payload },
		setMessagesFetching: (state, { payload }) => {
			state.messagesFething = payload
		},
		setDialogs: (state, { payload }) => { state.dialogs = payload },
		setMessages: (state, { payload }) => { state.messages = payload },
		setMessage: (state, payload) => { state.messages.push(payload) },
		setNewMessagesCount: (state, { payload }) => { state.newMessagesCount = payload },
		setDeletedMessage(state, { payload }) {
			state.messages.items = state.messages.items.filter(item => item.id !== payload)
		}


	}
})


export const { setDeletedMessage, setNewMessagesCount, setMessagesFetching, setDialogsFetching, setDialogs, setMessages, setMessage } = dialogsSlice.actions;

export const getNewMessagesCount = () => async (dispatch) => {
	const count = await dialogsAPI.getNewMessagesCount()
	dispatch(setNewMessagesCount(count))
}
export const getDialogs = () => async (dispatch) => {
	dispatch(setDialogsFetching(true));
	const data = await dialogsAPI.getDialogs();
	dispatch(setDialogsFetching(false));
	dispatch(setDialogs(data))
}
export const getMessages = (id) => async (dispatch) => {
	dispatch(setMessagesFetching(true));
	const response = await dialogsAPI.getMessages(id);
	dispatch(setMessagesFetching(false));
	dispatch(setMessages(response))
	// обновить chatnavbar
	const data = await dialogsAPI.getDialogs()
	dispatch(setDialogs(data))
}
export const sendMessage = (userId, body) => async (dispatch) => {
	await dialogsAPI.sendMessage(userId, body)
	dispatch(getMessages(userId))
	dispatch(setMessage)
	// обновить chatnavbar
	const data = await dialogsAPI.getDialogs()
	dispatch(setDialogs(data))
}
export const deleteMessage = (messageId, userId) => async (dispatch) => {
	const data = await dialogsAPI.deleteMessage(messageId)
	if (data.resultCode === 0) {
		dispatch(getMessages(userId))
		dispatch(setDeletedMessage(messageId))
	}
}







export default dialogsSlice.reducer;
