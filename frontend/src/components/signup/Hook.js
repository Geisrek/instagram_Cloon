import { useState } from "react"
import {useNavigate}  from "react-router-dom";
const useSignup=()=>{
const[userName,setUserName]=useState("user name")
const[password,setPassword]=useState("password")
const[email,setEmail]=useState("Email")
const navigate=useNavigate()

return{userName:userName,
password:password,
email:email,
setUserName:setUserName,
setPassword:setPassword,
setEmail:setEmail,
navigate:navigate
}
}
export default useSignup