import { useState } from "react";
import {useNavigate}  from "react-router-dom";
import axios from "axios";
const useProfile=()=>{
    const [more,setMore]=useState("less")
    const [actives,setActives]=useState(["active","",""])
    const user=localStorage.getItem("user")
    const [posts,setPosts]=useState([]);
    const navigate=useNavigate()
const data=user?JSON.parse(user):null

    const posts_url=`http://localhost:8000/api/getPosts`
const getPost=async(url,setPosts)=>{
   
    try{
        const response=await axios.post(url,{user_id:1})
       setPosts(response.data)
       console.log(response,"<-")
       
    }
    catch(err){
        console.log(err)
    }
    }
    return ({
        more:more,       
        setMore:setMore,
        actives:actives,
        setActives,setActives,
        posts_:posts,
        setPosts:setPosts,
        posts_url: posts_url,
        getPost:getPost,
        data:data,
        navigate:navigate
    })
}
export default useProfile;