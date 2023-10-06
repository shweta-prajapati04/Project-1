import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Reducer } from "./Reducer";
import { ProductReducer } from "./ProductReducer/ProductReducer";
import thunk from "redux-thunk";

let combineReducer=combineReducers({
    Reducer,
    ProductReducer
})

export const Store=legacy_createStore(combineReducer,applyMiddleware(thunk))