import "./productdetails.css" 
import { NavLink } from "react-router"
const ProductDetails = () => {
  return (
    <>
     <div className="checkout-wrappper">Checkout </div>
     <div className="returning">
      <div className="clickhere"> Returning customer? 
        <NavLink style={{fontSize:"19px"  }} to={"/login"}>Click here to Login</NavLink>
        
      </div>
      <p>
        If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, 
        please proceed to the Billing & Shipping section.</p>
     </div>

     <div className="user-password">
     <input type="text" placeholder="Username or Email "  /> 
     <input type="text" placeholder="Password" />
     </div>
     <div className="login-remember1">
      <button>Login</button>
      <div className="check-remember">
      <input type="checkbox" />
      Remember me
      </div>
     </div>

     <div className="here"> 
     <div className="clickhere">
     
     </div>
     </div>
    </>
   
  )
}

export default ProductDetails
