import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggelAuth } from "../Redux/isAuth/action";


export const Logout = () => {
 const navigate= useNavigate()
 const dispatch = useDispatch()
  useEffect(()=>{
    navigate("/")
    dispatch(toggelAuth(true))
  },[])
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
    
  return <>
    
    </>;
};
