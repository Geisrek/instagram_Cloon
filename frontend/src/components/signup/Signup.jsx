import "./style.css"
import useSignup from "./Hook"
import intro1 from "../assets/intro1.png"
import facebook from "../assets/facebook.svg"
const Signup=()=>{
    const {userName,Password,email,setUserName,setPassword,setEmail,navigate}=useSignup()
return(<section className="flex signin">
 
    <div className="intro">
        <img src={intro1} alt="" srcset="" className="intro-img"/>
    </div>
    <div>
        <div className="form column">
        <div className="top-form">
           <h1>Instagram</h1>
           <div className="column inputs">
           <input type="text" value={email} onChange={setEmail}/>
           <input type="text" value={userName} onChange={setUserName}/>
           <input type="text" value={Password} onChange={setPassword}/>
           <button type="button" className="validate-btn">Login</button>
           </div>
          

           
        </div>
        <div className="flex middle mid-y"><div className="line"></div>OR<div className="line"></div></div>
        <div className="form-foot column">
         <div className="flex mid blue-c"><img src={facebook} alt="" srcset="" />Log in with facebook</div>
        
          <span className="blue-c reset-pass">Forgot password?</span>
          </div>
        </div>
        <div className="navigate-signup flex">
             <span>Do you have an account?</span><button onClick={()=>{navigate("/signin")}}>Sign in</button>
        </div>
    </div>
</section>)
}
export default Signup