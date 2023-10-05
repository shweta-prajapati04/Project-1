import { LOGOUT, SIGNIN, SIGNUP } from "./ActionType";

let initialState = {
    user: {},
    isLogin: false,
    isSignUp: false
}
export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            // console.log(action.payload)
            return {
                ...state, user: action.payload, isLogin: true, isSignUp: false
            }
        case SIGNUP:
            return {
                ...state, isSignUp: true
            }

        case LOGOUT:
            return  initialState


        default:
            return state
    }
}