import "./signup.css"
import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router"
const SignUp = () => {
  const [fullname, setFullname]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [address, setAdress]= useState('')

  const url =" https://ecommerce-2025-ar31.onrender.com/signup"
  const baseUrl ="http://localhost:5173"
  const handleSignup= async(e)=>{
    e.preventDefault();
    try{
      const ress = await axios.post(url,{fullname,email,password,address, baseUrl});
      console.log(ress)
     setFullname('')
     setEmail('')
     setPassword('')
     setAdress('')

      // if(ress?.status ===201)
      //  set ress()
    }
    
   catch(err){
    console.log(err)
   }

  }
  return (
    <div className="signup-wrapper">
    <div className="signup-image">
    <h1>Welcome To <br />Egbujor<span>24</span></h1>
    </div>
    <div className="signup-text">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Fullname" 
      value={fullname}
      onChange={(e) =>setFullname(e.target.value)}
      />
      <input type="email" placeholder="Email" 
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      />
      <input type="password" placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
     
      <button onClick={handleSignup}>Sign up</button>
      <span style={{fontSize:"20px"}}>Already have an account? <NavLink to={"/login"}
    style={{textDecoration:"none",color:"red",fontSize:"25px",fontWeight:"bold"}}>Log in
   </NavLink> </span>
    </div>
  </div>
  )
}

export default SignUp













// import "./signup.css"
// import axios from "axios"
// import { useState } from "react"

// const SignUp = () => {
//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');

//   const url = "https://ecommerce-2025-ar31.onrender.com/signup";

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const ress = await axios.post(url, { fullname, email, password, address }, {
//         headers: { "Content-Type": "application/json" }
//       });

//       if (ress?.status === 201) {
//         setFullname('');
//         setEmail('');
//         setPassword('');
//         setAddress('');
//         console.log("Signup successful:", ress.data);
//       }
//     } catch (err) {
//       console.log("Signup error", err.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="signup-wrapper">
//       <div className="signup-image">
//         <h1>Welcome To <br /><span>Estore</span></h1>
//       </div>
//       <div className="signup-text">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <input type="text" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
//           <button type="submit">Sign up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
