import { useState } from "react"
import {useNavigate}  from "react-router-dom";
import axios from "axios";
const useSignin=()=>{
const[email,setEmail]=useState("email")
const[password,setPassword]=useState("password")
const navigate=useNavigate()
const url="http://localhost:8000/api/signin"
const Authanticat=async(url,values)=>{
const {email,password}=values
try{
    const response=await axios.post(url,{
        email:email,
        password:password
    })
    const data=(response.data)
    const {message,user}=data
    if(message=="success"){
        navigate("/home")
    }
}
catch(err){
    console.log(err)
}
}

return{email:email,
password:password,
setEmail:setEmail,
setPassword:setPassword,
navigate:navigate,
auth:Authanticat,
url:url
}
}
export default useSignin