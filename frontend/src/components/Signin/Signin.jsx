import "./style.css"
import useSignin from "./Hook"
import intro1 from "../assets/intro1.png"
import facebook from "../assets/facebook.svg"
import Navbar from "../navbar/navbar"

const Signin=()=>{
    const{email,password,setEmail,setPassword,navigate,auth,url}=useSignin()
return(
<section className="flex signin">

    <div className="intro">
        <img src={intro1} alt="" srcset="" className="intro-img"/>
    </div>
    <div>
        <div className="form column">
        <div className="top-form">
           <h1>Instagram</h1>
           <div className="column inputs">
           <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
           <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
           <button type="button" className="validate-btn" onClick={()=>{auth(url,{email:email,password:password})}}>Login</button>
           </div>
          

           
        </div>
        <div className="flex middle mid-y"><div className="line"></div>OR<div className="line"></div></div>
        <div className="form-foot column">
         <div className="flex mid blue-c"><img src={facebook} alt="" srcset="" />Log in with facebook</div>
        
          <span className="blue-c reset-pass">Forgot password?</span>
          </div>
        </div>
        <div className="navigate-signup flex mid-y">
             <span>Don't have an account?</span><button onClick={()=>navigate("/signup")}>Sign up</button>
        </div>
    </div>
</section>)
}
export default Signin