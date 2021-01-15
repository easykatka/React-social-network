import { getAuthUserData } from "../reducers/auth-reducer";
import { createSlice } from "@reduxjs/toolkit";

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
export const init = () => (dispatch) => {
	dispatch(getAuthUserData()).then(() => { 
		dispatch(setInit());
	});
};
export const { setInit } = appSlice.actions;
export default appSlice.reducer;
