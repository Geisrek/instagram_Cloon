import "./style.css"
import useSignin from "./Hook"
import intro1 from "../assets/intro1.png"
import facebook from "../assets/facebook.svg"
const Signup=()=>{
return(<section className="flex signin">
    <div className="intro">
        <img src={intro1} alt="" srcset="" />
    </div>
    <div>
        <div className="form column">
        <div className="top-form">
           <h1>Instagram</h1>
           <div className="column inputs">
           <input type="text" />
           <input type="text" />
           <input type="text" />
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
             <span>Don't have an account?</span><button>Sign up</button>
        </div>
    </div>
</section>)
}
export default Signup