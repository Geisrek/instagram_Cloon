import { useState } from "react"
import {useNavigate}  from "react-router-dom";
import axios from "axios";
const useSignup=()=>{
const[userName,setUserName]=useState("user name")
const[password,setPassword]=useState("password")
const[email,setEmail]=useState("Email")
const navigate=useNavigate()
const url="http://localhost:8000/api/addUser"
const CreateAccount=async(url,values)=>{
    const {email,name,password}=values
    try{
        const response=await axios.post(url,{
            name:name,
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
return({userName:userName,
password:password,
email:email,
setUserName:setUserName,
setPassword:setPassword,
setEmail:setEmail,
navigate:navigate,
Createemail:CreateAccount
})
}
export default useSignup