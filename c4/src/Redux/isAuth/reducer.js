import { isAuth } from "./action";

import { USER_NAME } from "./action";

const init = {isAuth:false , USER_NAME:""}



export const isAuthhandler=(store=init,{type,payload})=>{
    switch(type){
        case isAuth :
            return {...store,isAuth:!payload}
        case USER_NAME:
            return {...store,username:payload}
        default:
            return store
    }
}