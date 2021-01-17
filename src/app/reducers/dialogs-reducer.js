import { createSlice } from "@reduxjs/toolkit";
import { dialogsAPI } from "../../api/dialogs-api";

export const dialogsSlice = createSlice({
	name: "dialogs",
	initialState: {
		dialogs: [],
		isFetching:false,

		
	},
	reducers: {
		setIsFetching: (state, {payload}) => {
			state.isFetching = payload;
		},
		setDialogs:(state,{payload}) => { 
			state.dialogs = payload
		}
		
	},
});

export const { setIsFetching ,setDialogs} = dialogsSlice.actions;

export const getDialogs = () => async (dispatch) => {
	dispatch(setIsFetching(true));
	const data = await dialogsAPI.getDialogs();
	dispatch(setIsFetching(false));
	dispatch(setDialogs(data))
}



export default dialogsSlice.reducer;
