import axios from "axios";
import { CART, ERROR, LOADING, SUCCESS } from "./ActionType";

export const funFetchProduct =(search)=> (dispatch) => {
   let filter= search.replaceAll(",", "")
   console.log(filter)
    dispatch({ type: LOADING })
    axios.get(`http://localhost:8090/products${filter}`)
        .then((res) => {
            // console.log(res.data)
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: ERROR })

        })

}
// export const funAddCart=(dispatch)=>{
//     axios.post('http://localhost:8090/products/cart')
//     .then ((res)=>{
//         dispatch({type:CART,payload})
//     })

// }