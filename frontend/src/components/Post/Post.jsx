import like from "../assets/like.svg"
import comment from "../assets/comment.svg"
import share from "../assets/send.svg"
import save from "../assets/bookmark.svg"
import profile from "../profile/prof/profile.avif"
import useHome from "./Hooks"
import "./style.css"
const Post=({index,description,likes,user,time})=>{
    const {more,setMore}=useHome()
    return(
        <li key={index} className="column post-item">
                    <div className="mid-y post-head flex "><div className="post-info mid flex gap-10">
                        <div className="user-bg flex mid">
                            <img src={profile} className="user"/></div><div className="flex mid gap"> <h4>{user}</h4>
                    <span>.{time}</span></div></div><button>...</button></div>
                    <div className="post-img-container"><img src={profile} className="post-img"/></div>
                    <div className={`column post-text`}>
                        <span>{likes} likes</span>
                        
                        <div className="flex reactions"><div className="flex gap-10"><img src={like} alt="" className="reaction-btn"/><img src={comment} alt="" className="reaction-btn"/><img src={share} alt="" className="reaction-btn"/></div><img src={save} className="reaction-btn"/></div>
                      
                        <div className={`description ${more}`}><div>{description}</div></div>
                       <span className="toggle-text" onClick={()=>setMore(more==="more"?"less":"more")}>see {more}</span>
                       <div><input type="text" /></div>
                    </div>
                </li>
    )
}
export default Post