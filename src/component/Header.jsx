import "./header.css"
import { NavLink } from "react-router"
import { useState } from "react"
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [drop1, setDrop1] = useState(false)
  const [blog, setBlog] = useState(false)
  const [pages, setPages]= useState(false)
  const [menu, setMenu]=useState(false)
  function handlemenu () {
    setMenu(!menu)
  }
  function handledrop1 () {
    setDrop1(!drop1)
  };
  function handleblog () {
    setBlog(!blog)
  };

  function handlepages() {
    setPages(!pages)

 
  }
  return (
   <header>
   <h1>Estore</h1>
   <div className="header2">
   <NavLink to={""} style={{textDecoration:"none", fontSize:"24px", color:"black"}}><p>Home</p></NavLink>
   <NavLink to={"/category"} style={{textDecoration:"none", fontSize:"24px", color:"black"}}><p>Category</p></NavLink>
   <p onClick={handledrop1}>Latest</p>
   {
    drop1 ?  <div className="drop1">
      <NavLink to={"/productdetails"} style={{
        textDecoration:"none", fontSize:"24px", color:"black"
      }}><p>Product Details</p></NavLink>
    </div>:null
   }

  <p onClick={handleblog}>Blog</p>
   {
    blog ?  <div className="drop2"></div>:null
   }

  <p onClick={handlepages}>Pages</p>
   {
    pages ?  <div className="drop3">
            <NavLink to={"/about"} style={{
        textDecoration:"none", fontSize:"24px", color:"black"
      }}><p>About</p></NavLink>

    <NavLink to={"/checkout"} style={{
        textDecoration:"none", fontSize:"24px", color:"black"
      }}><p>Checkout</p></NavLink>

   <NavLink to={"/login"} style={{
        textDecoration:"none", fontSize:"24px", color:"black"
      }}><p>Login</p></NavLink>
    </div>:null
   }
        <NavLink to={"/contact"} style={{textDecoration:"none", fontSize:"25px", color:"black"}}><p>Contact</p></NavLink>
   </div>

   <div className="header3">
<div className="search-input">
  <input type="text" placeholder="Search products"/>
  <FaSearch className="search" />
  
</div>
<div className="cyclecart">25</div>
<div className="cyclefav">02</div>
<div className="cycle"><MdFavoriteBorder size={39}/></div>

<div className="cycle">
<NavLink to={"/cart"}>
<FaShoppingCart size={39} style={{Color:"black"}}/>
</NavLink>
</div>

  <TiThMenu size={39}  className="menu" onClick={handlemenu}/>
 
  
   </div>
   {
    menu ? <div className="menu-drop">
      <NavLink  className="navlink" to={""}><p>Home</p></NavLink>
      <NavLink className="navlink" to={"/Category"}><p>Product Category</p></NavLink>
      <NavLink className="navlink" to={"/login"}><p>Login</p></NavLink>
      <NavLink className="navlink" to={"/signup"}><p>Sign Up</p></NavLink>
      <NavLink className="navlink" to={"/checkout"}><p>Checkout</p></NavLink>
      <NavLink className="navlink" to={"/productdetails"}><p>Product Details</p></NavLink>
    </div>:null
  }
   </header>
  )
}

export default Header
