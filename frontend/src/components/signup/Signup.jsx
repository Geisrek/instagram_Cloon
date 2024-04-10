import "./style.css"
import useSignup from "./Hook"
import intro1 from "../assets/intro1.png"
import facebook from "../assets/facebook.svg"
const Signup=()=>{
    const {userName,password,email,setUserName,setPassword,setEmail,navigate,Createmail,url}=useSignup()
return(<section className="flex signin">
 
    <div className="intro">
        <img src={intro1} alt="" srcset="" className="intro-img"/>
    </div>
    <div>
        <div className="form column">
        <div className="top-form">
           <h1>Instagram</h1>
           <div className="column inputs">
           <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}/>
           <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
           <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)}/>
           <button type="button" className="validate-btn" onClick={()=>{Createmail(url,{email:email,name:userName,password:password})}}>Login</button>
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