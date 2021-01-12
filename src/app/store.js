import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer";
import authReducer from "../app/reducers/auth-reducer";
import appReducer from "../app/reducers/app-reducer";
import profileReducer from "./reducers/profile-reducer";

export default configureStore({
	reducer: {
		app: appReducer,
		users: usersReducer,
		auth: authReducer,
		profile: profileReducer,
	},
});
