import { createSlice } from "@reduxjs/toolkit";
import { dialogsAPI } from "../../api/dialogs-api";

export const dialogsSlice = createSlice({
	name: "dialogs",
	initialState: {
		dialogs: [],
		dialogsFetching: false,
		messages: [],
		messagesFething: false,


	},
	reducers: {
		setDialogsFetching: (state, { payload }) => {
			state.dialogsFetching = payload;
		},
		setMessagesFetching: (state, { payload }) => {
			state.messagesFething = payload;
		},
		setDialogs: (state, { payload }) => {
			state.dialogs = payload
		},
		setMessages: (state, { payload }) => {
			state.messages = payload
		},
		setMessage: (state, payload) => {
			state.messages.push(payload)
		},

	},
});

export const { setMessagesFetching,setDialogsFetching, setDialogs, setMessages, setMessage } = dialogsSlice.actions;

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







export default dialogsSlice.reducer;
