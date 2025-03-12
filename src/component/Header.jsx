import "./header.css"
import { NavLink } from "react-router"
import { useState } from "react"
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { Drawer, Modal } from "antd";

const Header = () => {
  const [openmenu, setOpenmunu] =useState(false)
  const [drop1, setDrop1] = useState(false)
  const [blog, setBlog] = useState(false)
  const [pages, setPages]= useState(false)
  const [menu, setMenu]=useState(false)
  const [openpop, setOpenpop]=useState(false)
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
   <h1>Egbujor<span style={{color:"red"}}>24</span></h1>
   <div className="header2">
   <NavLink className={"navlink"} to={""} ><p style={{fontSize:"20px ", }}>Home</p></NavLink>
   <NavLink to={"/category"} className={"navlink"}><p>Category</p></NavLink>
   <p style={{fontSize:"20px ", cursor:"pointer"  }} onClick={handledrop1}>Latest</p>
   {
    drop1 ?  <div className="drop1">
      <NavLink to={"/productdetails"} className={"navlink"}><p>Checkout</p></NavLink>
    </div>:null
   }

  <p style={{fontSize:"20px ", cursor:"pointer" }} onClick={handleblog}>Blog</p>
   {
    blog ?  <div className="drop2"></div>:null
   }

  <p style={{fontSize:"20px ",cursor:"pointer" }} onClick={handlepages}>Pages</p>
   {
    pages ?  <div className="drop3">
            <NavLink className={"navlink"} to={"/about"}><p >About</p></NavLink>

    <NavLink to={"/checkout"} className={"navlink"}><p>Product Details</p></NavLink>

   <NavLink to={"/login"} className={"navlink"}><p>Login</p></NavLink>
    </div>:null
   }
        <NavLink to={"/contact"} className={"navlink"}><p>Contact</p></NavLink>
   </div>

   <div className="header3">
<div className="search-input">
  <input type="text" placeholder="Search products"/>
  <FaSearch className="search" />
  
</div>


<div className="cycle">
  <div className="cyclefav">20</div>
<NavLink to={"/cart"}>

<Modal
open={openpop}
onClose={()=>setOpenpop(true)}
>


</Modal>
<div className="cyclecart">0</div>
<FaShoppingCart size={25} style={{Color:"black"}} />
</NavLink>
</div>
<Drawer className="drawer" style={{width:"55%"}} 
open={openmenu}
onClose={()=> setOpenmunu(false)}
cancelButtonProps={{hidden:true}}
okButtonProps={{hidden:true}}
closeIcon={false}
placement="left"
>

<NavLink  className={"navlink"} to={""}><p>Home</p></NavLink>
      <NavLink className={"navlink"} to={"/Category"}><p>Product Category</p></NavLink>
      <NavLink className={"navlink"} to={"/login"}><p>Login</p></NavLink>
      <NavLink className={"navlink"}to={"/signup"}><p>Sign Up</p></NavLink>
      <NavLink className={"navlink"} to={"/checkout"}><p>Checkout</p></NavLink>
      <NavLink className={"navlink"} to={"/productdetails"}><p>Product Details</p></NavLink>

</Drawer>
<div className="cycle"><MdFavoriteBorder size={25} onClick={() => setOpenpop(false)}/></div>
  <TiThMenu size={30}  className="menu" onClick={()=>setOpenmunu(true)}/>
 
  
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
