import { ERROR, LOADING, SUCCESS } from "./ActionType";

const initialState = {
    isLoading: false,
    isError: false,
    data: []
}
export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state, isLoading: true
            }
        case SUCCESS:
            return {
                ...state, isLoading: false, data: payload
            }
        case ERROR:
            return {
                ...state, isError: true
            }
        default:
            return state
    }
}