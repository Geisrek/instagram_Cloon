import { useState } from "react"
import {useNavigate}  from "react-router-dom";
const useSignin=()=>{
const[userName,setUserName]=useState("user name")
const[password,setPassword]=useState("password")
const navigate=useNavigate()

return{userName:userName,
password:password,
setUserName:setUserName,
setPassword:setPassword,
navigate:navigate
}
}
export default useSignin