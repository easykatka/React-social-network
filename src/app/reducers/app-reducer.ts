import { getAuthUserData } from "./auth-reducer";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";



export const appSlice = createSlice({
	name: "app",
	initialState: {
		isInit: false,
	},
	reducers: {
		setInit: (state) => {
			state.isInit = true;
		},
	},
});

//action
export const { setInit } = appSlice.actions;
//thunk
export const init = () => (dispatch: AppDispatch) => {
	dispatch(getAuthUserData()).then(() => {
		dispatch(setInit());
	});
};

export default appSlice.reducer;


