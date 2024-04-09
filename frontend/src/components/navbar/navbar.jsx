import "./style.css"
import search from "../assets/search.svg"
import home from "../assets/home.svg"
import user from "../assets/user.svg"
import add from "../assets/add.svg"
import useNav from "./Hook"
const Navbar=()=>{
    const {navigate}=useNav()
    return(<section className="column navbar">
          <div className="column  nav-gap">
            <h1>Inastagram</h1>
            <div className="flex gap-5 nav-item" onClick={()=>{navigate("/home")}}>
                <img src={home} alt="" />
                <h3>Home</h3>
            </div >
            <div className="flex gap-5 nav-item" onClick={()=>{navigate("/profile")}}>
                <img src={user} alt="" />
                <h3>Profile</h3>
            </div>
            <div className="flex gap-5 nav-item">
                <img src={search} alt="" />
                <h3>Search</h3>
            </div>
            <div className="flex gap-5 nav-item">
                <img src={add} alt="" />
                <h3>Add post</h3>
            </div>
          </div>
          <button className="logout nav-item" onClick={()=>{navigate("/signin")}}>Logout</button>
    </section>)
}
export default Navbar