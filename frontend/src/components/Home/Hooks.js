import { useState } from "react";
import axios from "axios";
const useHome=()=>{
    const [more,setMore]=useState("less")
    const user=localStorage.getItem("user")
    const [posts,setPosts]=useState([]);
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
        posts_:posts,
        setPosts:setPosts,
        posts_url: posts_url,
        getPost:getPost
    })
}
export default useHome;