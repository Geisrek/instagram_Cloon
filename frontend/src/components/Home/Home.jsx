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
    const {more,setMore}=useHome()
    //<Post index={1} user={"Nambiha"} likes={"10k"} time={"5m"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}/>
    return(
    <section className="flex">
        <Navbar/>
    <section className="Home flex mid">
        
        <div className="posts-home column">
            <ul className="flex stories"></ul>
            <ul className="posts-list column gap-30">
                <li className="column post-item">
                    <div className="mid-y post-head flex "><div className="post-info mid flex gap-10"><div className="user-bg flex mid"><img src={profile} className="user"/></div><div className="flex mid gap"> <h4>Rafik</h4>
                    <span>5h</span></div></div><button>...</button></div>
                    <div className="post-img-container"><img src={profile} className="post-img"/></div>
                    <div className={`column post-text`}>
                        <span>1K likes</span>
                        
                        <div className="flex reactions"><div className="flex gap-10"><img src={like} alt="" className="reaction-btn"/><img src={comment} alt="" className="reaction-btn"/><img src={share} alt="" className="reaction-btn"/></div><img src={save} className="reaction-btn"/></div>
                      
                        <div className={`description ${more}`}><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur sint commodi eius autem veniam impedit, velit atque nesciunt ullam animi, veritatis optio reiciendis, distinctio eligendi unde! Consequatur laboriosam est facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora modi officia voluptatum id amet odit magni eligendi labore! Beatae illum vero cum maiores saepe nam commodi magnam neque aut.</div></div>
                       <span className="toggle-text" onClick={()=>setMore(more==="more"?"less":"more")}>see {more}</span>
                       <div><input type="text" /></div>
                    </div>
                </li>
                <Post index={1} user={"Nambiha"} likes={"10k"} time={"5m"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}/>
            </ul>
        </div>
        <div className="column user-ref gap-30"><div className="flex mid gap-10  prof"><di className="user-bg flex mid"><img className="user" src={profile} alt="" /></di><h4>User Name</h4></div>
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