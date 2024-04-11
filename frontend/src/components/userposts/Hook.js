import { useState } from "react";
import {useNavigate}  from "react-router-dom";
import axios from "axios";

const usePost=()=>{
    
    const navigate=useNavigate()
    const [more,setMore]=useState("less")
    const [toggle,setToggle]=useState("hide")
    const [like,setLike]=useState("dislike");
    const [description,setDescription]=useState("")
    const user=localStorage.getItem("user");
    const data=user?JSON.parse(user):null

    const likes_url=`http://localhost:8000/api/like`
    const dislikes_url=`http://localhost:8000/api/dislike`
    const share_url="http://localhost:8000/api/addPost"
    const post_url=`http://localhost:8000/api/getPost`
    const delete_url="http://localhost:8000/api/getPost/deletePost"
    const getPost=async(url,setPost,values)=>{
       const {post_id}=values
        try{
            const response=await axios.post(url,{user_id:data.id,post_id:post_id})
            //console.log(response.data.user_posts.description)
           setPost(response.data.user_posts.descriptions)
         
           
        }
        catch(err){
            console.log(err)
        }
        }
        const deletePost=async(url,values)=>{
            const {post_id}=values
             try{
                 const response=await axios.post(url,{user_id:data.id,post_id:post_id})
                
                
             }
             catch(err){
                 console.log(err)
             }
             }
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
        name:data.name,
        likes_url:likes_url,
        dislikes_url:dislikes_url,
        share_url:share_url,
        post_url:post_url,
        delete_url:delete_url,
        SharePost:SharePost,
        navigate:navigate,
        getPost:getPost,
        deletePost:deletePost,
        description:description,
        setDescription:setDescription
    })
}
export default usePost;