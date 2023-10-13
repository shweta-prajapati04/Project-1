import { CART, LOGOUT, SIGNIN, SIGNUP } from "./ActionType"

export const funSignIn=(data)=>{
    return{
        type:SIGNIN,
        payload:data
    }
}
export const funSignUp=()=>{
    return{
        type:SIGNUP
    }
}
export const funLogout=()=>{
    return{
        type:LOGOUT
    }
}
export const funAddCart=(data)=>{
    return{
        type:CART,
        payload:data
    }
}