import { useState } from "react"
import axios from "axios";
const useAddPost=()=>{
const [post,setPost]=useState("What you think about...")
const url="http://localhost:8000/api/addPost"
const CreatePost=async(url,values)=>{
    const {user_id,des,image}=values
    try{
        const response=await axios.post(url,{
            user_id:user_id,
            des:des,
            image:image
        })
       
       
    }
    catch(err){
        console.log(err)
    }
    }
return({
    post:post,
    setPost:setPost,
    CreatePost:CreatePost,
    url:url
})
}
export default useAddPost