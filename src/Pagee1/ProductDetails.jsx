import "./productdetails.css" 
import { NavLink } from "react-router"
const ProductDetails = () => {
  return (
    <>
     <div className="checkout-wrappper">Checkout </div>
     <div className="returning">
      <div className="clickhere"> Returning customer? 
        <NavLink style={{fontSize:"25px"  }} to={"/login"}>Click here to Login</NavLink>
        <p>
        If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, 
        please proceed to the Billing & Shipping section.</p>
      </div>
     </div>
    </>
   
  )
}

export default ProductDetails
