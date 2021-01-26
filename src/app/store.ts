import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import appReducer from "./reducers/app-reducer";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import chatReducer from "./reducers/chat-reducer";
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		app: appReducer,
		users: usersReducer,
		chat:chatReducer,
		auth: authReducer,
		profile: profileReducer,
		dialogs: dialogsReducer,
		
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //!почитать 
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store