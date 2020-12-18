import {getAuthUserData} from "./Auth-reducer";
//local state
let initialState = {
    initialized: false
}
// reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default :
            return state;
    }
}
// actions
export const actions = {
    initializedSuccess: () => ({type: "SET_INITIALIZED_SUCCESS"})
}
// thunks
export const initializeApp = () => (dispatch) => {                     // инициализация для App
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
                dispatch(actions.initializedSuccess())
            }
        )
}

export default appReducer