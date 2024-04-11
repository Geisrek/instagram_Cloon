import { useState } from "react";
import axios from "axios";
const usePost=()=>{
    
    const [more,setMore]=useState("less")
    const [toggle,setToggle]=useState("hide")
    const [like,setLike]=useState("dislike");
    const user=localStorage.getItem("user");
    const data=user?JSON.parse(user):null

    const likes_url=`http://localhost:8000/api/like`
    const dislikes_url=`http://localhost:8000/api/dislike`
    const share_url="http://localhost:8000/api/addPost"
    const SharePost=async(url,values)=>{
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
    const makeLike=async(url,values)=>{
        const {user_id,post_id}=values
        try{
            const response=await axios.post(url,{user_id:user_id,post_id:post_id})
           
           
           
        }
        catch(err){
            console.log(err)
        }
        }
        
    return ({
        more:more,       
        setMore:setMore,
        toggle:toggle,
        setToggle:setToggle,
        makeLike:makeLike,
        like_:like,
        setLike:setLike,
        id:data.id,
        likes_url:likes_url,
        dislikes_url:dislikes_url,
        share_url,
        SharePost:SharePost
    })
}
export default usePost;