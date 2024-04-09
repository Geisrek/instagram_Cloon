import "./style.css"
const Navbar=()=>{
    return(<section className="column navbar">
          <div className="column">
            <h1>Inastagram</h1>
            <div className="flex gap-5">
                <img src="" alt="" />
                <h3>Home</h3>
            </div>
            <div className="flex gap-5">
                <img src="" alt="" />
                <h3>Profile</h3>
            </div>
            <div className="flex gap-5">
                <img src="" alt="" />
                <h3>Search</h3>
            </div>
            <div className="flex gap-5">
                <img src="" alt="" />
                <h3>Add post</h3>
            </div>
          </div>
          <button className="logout">Logout</button>
    </section>)
}
export default Navbar