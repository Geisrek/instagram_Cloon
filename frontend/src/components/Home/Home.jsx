import like from "../assets/like.svg"
import comment from "../assets/comment.svg"
import share from "../assets/send.svg"
import save from "../assets/bookmark.svg"
import profile from "../profile/prof/profile.avif"
import useHome from "./Hooks"
import Post from "../Post/Post"
import Navbar from "../navbar/navbar"
import "./style.css"
const Home =()=>{
    let posts_list=[]
    const {more,setMore,posts_,setPosts,getPost,posts_url}=useHome()
    if(posts_.length===0){
  getPost(posts_url,setPosts);
   }
    else{
        const {posts,user_posts}=posts_
        posts_list=[...posts,...user_posts]
       
    }
    return(
    <section className="flex">
        <Navbar/>
    <section className="Home flex mid">
        
        <div className="posts-home column">
            <ul className="flex stories"></ul>
            <ul className="posts-list column gap-30">
                {posts_list.map((item,index)=>{
                    const {description,id}=item
                    return <Post index={index} post_id={id} user={"Nambiha"} likes={"10k"} time={"5m"} description={description}/>
                })}
                
            </ul>
        </div>
        <div className="column user-ref gap-30"><div className="flex mid gap-10  prof"><div className="user-bg flex mid"><img className="user" src={profile} alt="" /></div><h4>User Name</h4></div>
        <div className="suggestions-head flex"><span>Suggestion for you</span><h4>See all</h4></div>
        <ul className="suggestion">
            <li>
            <div className="flex mid gap-10 friends"> <div className="owner-bg flex mid"><img className="owner" src={profile} alt="" /></div><h4>User Name</h4><button className="follow-btn">Follow</button></div>
            </li>
            <li>
            <div className="flex mid gap-10 friends"> <div className="owner-bg flex mid"><img className="owner" src={profile} alt="" /></div><h4>User Name</h4><button className="follow-btn">Follow</button></div>
            </li>
            </ul>
            </div>
    </section>
    </section>)
}
export default Home