import { useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";
import { useDispatch } from "react-redux";

import axios from "axios";
import { findorders } from "../Redux/neworders/action";

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
   const user=useSelector((store)=>store.username.username)
   const dispatch=useDispatch()
   useEffect(()=>{
     axios.get(`http://localhost:8080/orders?owner_name=${user}`)
			.then(function (response) {
				// handle success
        dispatch(findorders(response.data))
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
   },[])
   
   const orders = useSelector((store)=>store.orders.orders)
   console.log(orders)
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          value={user}
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          {orders.map((e)=>(
           <span className="id">{e.id}</span>,
           <span className="problem">{e.problem}</span>,
           <span className="cost">{e.cost}</span>,
           <p className="status">Status:{e.status} </p>,
          <hr />
          ))}
        
        </div>
      </div>
    </div>
  );
};
