import { ORDERS } from "./action"

const init = {orders:[]}

export const ordershandlers=(store=init,{type,payload})=>{
    switch(type){
        case ORDERS :
            return {...store,orders:[...store.orders,...payload]}
        default:
            return store
    }
}