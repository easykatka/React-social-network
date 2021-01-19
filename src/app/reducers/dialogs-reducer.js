import { createSlice } from "@reduxjs/toolkit";
import { dialogsAPI } from "../../api/dialogs-api";

export const dialogsSlice = createSlice({
	name: "dialogs",
	initialState: {
		dialogs: [],
		isFetching: false,
		messages: [],


	},
	reducers: {
		setIsFetching: (state, { payload }) => {
			state.isFetching = payload;
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

export const { setIsFetching, setDialogs, setMessages, setMessage } = dialogsSlice.actions;

export const getDialogs = () => async (dispatch) => {
	dispatch(setIsFetching(true));
	const data = await dialogsAPI.getDialogs();
	dispatch(setIsFetching(false));
	dispatch(setDialogs(data))
}
export const getMessages = (id) => async (dispatch) => {
	dispatch(setIsFetching(true));
	const data = await dialogsAPI.getMessages(id);
	dispatch(setIsFetching(false));
	dispatch(setMessages(data))
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
