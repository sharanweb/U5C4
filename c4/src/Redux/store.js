import { combineReducers, legacy_createStore as createStore } from "redux";


import { isAuthhandler } from "./isAuth/reducer";

import { ordershandlers } from "./neworders/reducer";
const rootreducer =  combineReducers({
    isAuth:isAuthhandler,
    username:isAuthhandler,
    orders:ordershandlers
})

export const store = createStore(
	rootreducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(()=>{
    console.log(store.getState())
})