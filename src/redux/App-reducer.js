import {getAuthUserData} from "./Auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS" 

const initialState = {
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default :
            return state;
    }
}
// actions
export const actions = {
    initializedSuccess: () => ({type: SET_INITIALIZED_SUCCESS})
}
// thunks
export const initializeAppThunk = () => (dispatch) => {                    
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
                dispatch(actions.initializedSuccess())
            }
        )
}

