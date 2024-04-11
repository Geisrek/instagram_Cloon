import profile from "./prof/profile.avif"
import useProfile from "./Hooks"
import rows from "../assets/rows1.svg"
import reels from "../assets/reels.svg"
import tagg from "../assets/Tagg.svg"
import Navbar from "../navbar/navbar"
import "./styles.css"
const Profile=()=>{
    let posts_list=[]
    const {more,actives,setActives,setMore,posts_,setPosts,getPost,posts_url,data,navigate}=useProfile()
    const{name}=data
    if(posts_.length===0){
        getPost(posts_url,setPosts);
         }
          else{
              const {user_posts}=posts_
              posts_list=[...user_posts]
             
          }
    return(
        <section className="flex">
            <Navbar/>
        <section className="profile column">
            
            
            <div className="profile-info flex">
                <div className="pro-i-c" ><img src={profile} id="profile-img"/></div>
                <div className="column infos">
                
                    <div>
                        <h4>Holy_Emperor</h4>
                        </div>
                    <div className="flex gap-30">
                    <div className="statics">
                    <h6>1800</h6>
                        <span>Posts</span>
                        
                    </div>
                        <div className="statics">
                        <h6>6k</h6>
                        <span>followers</span>
                        
                    </div>
                    <div className="statics">
                    <h6>200</h6>
                        <span>following:</span>
                       
                    </div>
                   </div>
                   <div className="column">
                    <h3>{name}</h3>
                    <div className={`description ${more}`}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, soluta? Autem officiis quae quasi quidem? Impedit obcaecati maxime quas, consequuntur ipsum aliquid non ut, veritatis, hic rerum molestias nihil quis!</p></div>
                    <span className={`${more} rend`} onClick={()=>{setMore(more==="more"?"less":"more")}}>{more}</span>
                   </div>
                </div>
                
                <button>...</button>
            </div>
            <hr/>
           <div className=" flex mid categories"><div className="flex mid-y gap-30" ><div className={`flex p gap-5 ${actives[0]}`} onClick={()=>setActives(["active","",""])}><img src={rows} alt="" /><h5>POSTS</h5></div><div className={`flex p gap-5 ${actives[1]}`} onClick={()=>setActives(["","active",""])}><img src={reels} alt="" /><h5>REELS</h5></div><div className={`flex p gap-5 ${actives[2]}`} onClick={()=>setActives(["","","active"])}><img src={tagg} alt="" /><h5>TAGGED</h5></div></div></div>
           <div className="flex-wrap posts">
            {posts_list.map((item,index)=> <div className="post" onClick={()=>navigate(`post/${item.id}`)}><img src={profile}/></div>)}
            
           </div>
        </section>
        </section>
    )
}
export default Profile