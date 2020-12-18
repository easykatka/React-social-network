import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import profilesReducer from "./Profile-reducer"
import dialogsReducer from "./DialogsPage-reducer"
import sidebarReducer from "./Sidebar-reducer"
import usersReducer from "./Users-reducer"
import authReducer from "./Auth-reducer"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer"
import exp from "constants";

let rootReducer = combineReducers({
	profilesPage : profilesReducer,
	dialogPage: dialogsReducer,
	sidebar: sidebarReducer,
	userPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunkMiddleware)  ))


window.store=store


export default store