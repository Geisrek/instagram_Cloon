import Navbar from "../navbar/navbar"
import useAddPost from "./Hook"
import face from "../assets/face.svg"
import "./style.css"
const AddPost=()=>{
    const{post,setPost}=useAddPost()
    return(
    <section className="flex">
     <Navbar/>
     <section className="post flex">
        <div className="post-bar flex">
        <input type="text" value={post} onChange={(event)=>{setPost(event.target.value)}}/>
        <img src={face} alt="" />
        <button className="add-btn">Send</button>
        </div>
     </section>
    </section>)
}
export default AddPost