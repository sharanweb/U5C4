import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";

import { toggelAuth, username } from "../Redux/isAuth/action";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch()
 
  const navigate= useNavigate()
  const [user,setUser]=useState({})

  const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
  };
  
  const makecheck=()=>{
     axios.get(`http://localhost:8080/users?username=${user.username}`)
			.then(function (response) {
				// handle success
				console.log(response.data);
        if(response.data[0].role==="client"){
           navigate("/neworder")
        }else{
           navigate("/orders")
        }
        dispatch(toggelAuth(false))
        dispatch(username(response.data[0].username))
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
  }
  

  return (
		<div>
			<input
				className="username"
				type="text"
				name="username"
				placeholder="Enter Username"
				onChange={handelchange}
			/>
			<input
				className="password"
				type="password"
				name="password"
				placeholder="Enter password"
				onChange={handelchange}
			/>
			{/* On this button click make network req to find user with same username and password */}
			{/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
			<button className="submit" onClick={makecheck}>
				Login
			</button>
		</div>
  );
};
