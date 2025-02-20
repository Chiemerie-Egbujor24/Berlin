import "./login.css"
import { NavLink } from "react-router"
const Login = () => {
  return (
    <>
    <div className="login-wrap">
   
   
   <h1>Login</h1>
   <div className="wrap">

   <label>Username</label>
   
   <input type="text" />

   <label>Password</label>
   <input type="password" placeholder="********"/>
   <div className="check-forgot">
    
     <div className="chek">
       
     <input type="checkbox" /> 
     
     </div>
     <p>Forgot Password?</p>
   </div>
   
   <button className="login-button">Log In</button>
   <span>Don't have an account? <NavLink to={"/signup"}
    style={{textDecoration:"none",color:"red",fontSize:"30px",fontWeight:"bold"}}>Sign Up
   </NavLink> </span>
   </div>
  </div>
    
    </>
  )
}

export default Login
