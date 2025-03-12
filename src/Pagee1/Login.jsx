import "./login.css"
import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router"
const Login = () => {
  const url ="https://ecommerce-2025-ar31.onrender.com/login"
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [check, setCheck] =useState(false)
 
  const handlelogin = async() =>{
    try{
       const ress = await axios.post(url,{email,password})
       console.log(ress)
    }catch(err){
      console.log(err)
    }
  }
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
       
     <input type="checkbox" value={check} onClick={()=>setCheck(true)}/> 
     
     </div>
     <p>Forgot Password?</p>
   </div>
   
   <button onClick={handlelogin} className="login-button">Log In</button>
   <span>Don't have an account? <NavLink to={"/signup"}
    style={{textDecoration:"none",color:"red",fontSize:"30px",fontWeight:"bold"}}>Sign Up
   </NavLink> </span>
   </div>
  </div>
    
    </>
  )
}

export default Login
