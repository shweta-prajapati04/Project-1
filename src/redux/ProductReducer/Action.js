import axios from "axios";
import { ERROR, LOADING, SUCCESS } from "./ActionType";
export const funFetchProduct = (dispatch) => {
    dispatch({ type: LOADING })
    axios.get(`http://localhost:8090/products`)
        .then((res) => {
            // console.log(res.data)
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: ERROR })

        })

}
