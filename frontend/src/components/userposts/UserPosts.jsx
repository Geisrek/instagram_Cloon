import profile from "../profile/prof/profile.avif";
import usePost from "./Hook";
const UserPosts=({index,post_id,description,likes,user,time})=>{
    const {more,setMore,toggle,setToggle,makeLike,like_,setLike,id,likes_url,dislikes_url,share_url,SharePost}=usePost()
    return( <div key={index} className="column post-item">
    <div className="mid-y post-head flex "><div className="post-info mid flex gap-10">
        <div className="user-bg flex mid">
            <img src={profile} className="user"/></div><div className="flex mid gap"> <h4>{user}</h4>
    <span>.{time}</span></div></div><div className="column"><button className="toggler" onClick={()=>(toggle==="hide")?setToggle("show"):setToggle("hide")}>...</button><div className={`option_list column ${toggle}`}> <div className="option">delete</div>
    <div className="option">update</div>
    <div className="option"></div><div/></div></div></div>
    <div className="post-img-container"><img src={profile} className="post-img"/></div>
    <div className={`column post-text`}>
        <span>{likes} likes</span>
        
        <div className="flex reactions"><div className="flex gap-10"><button onClick={()=>{
            if(like_==="like")
            {
                setLike("dislike")
                makeLike(dislikes_url,{post_id:post_id,user_id:id})
            }
            else{
                setLike("like")
                makeLike(likes_url,{post_id:post_id,user_id:id})
            }
            }}><img src={like} alt="" className={`reaction-btn ${like_}`} /></button><img src={comment} alt="" className="reaction-btn"/><img src={share} alt="" className="reaction-btn" onClick={()=>SharePost(share_url,{user_id:id,des:description})}/></div><img src={save} className="reaction-btn"/></div>
      
        <div className={`description ${more}`}><div>{description}</div></div>
       <span className="toggle-text" onClick={()=>setMore(more==="more"?"less":"more")}>see {more}</span>
       <div><input type="text" /></div>
    </div>
</div>)
}
export default UserPosts