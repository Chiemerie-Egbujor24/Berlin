// Pages - Home, Product Category, Login, Shopping Cart, Product Details, Checkout, Sign Up)

import OverRall from "./assets/OverRall/OverRall"
import { RouterProvider,createBrowserRouter } from "react-router"
import Home from "./Pagee1/Home"
import Category from "./Pagee1/Category"
import Contact from "./Pagee1/Contact"
import Cart from "./Pagee1/Cart"
import ProductDetails from "./Pagee1/ProductDetails"
import About from "./Pagee1/About"
import Checkout from "./Pagee1/Checkout"
import Login from "./Pagee1/Login"
import SignUp from "./Pagee1/SignUp"
// import Loading from "./assets/Loading"
// import { useState, useEffect } from "react"
const App = () => {

  const router = createBrowserRouter([

    
    {
      path:"",
      element:<OverRall/>,
      children:[
        {
          path:"", element:<Home/>
         },
         {
          path:"/category", element:<Category/>
         },

         {
          path:"/contact", element:<Contact/>
         },
         {
          path:"/productdetails", element:<ProductDetails/>
         },
         {
          path:"/about", element:<About/>
         },
         {
          path:"/checkout", element:<Checkout/>
         },
         {
          path:"/login", element:<Login/>
         },

         {
          path:"/signup", element:<SignUp/>
         },

         
         {
          path:"/cart", element:<Cart/>
         },
      ]
    }

  ])
  return (
    <>
  <RouterProvider router={router}/>
 
  </>
   )
}

export default App
