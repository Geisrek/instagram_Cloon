import { useState } from "react"
const useAddPost=()=>{
const [post,setPost]=useState("What you think about...")
return({
    post:post,
    setPost:setPost
})
}
export default useAddPost