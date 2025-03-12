import "./overRall.css"
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import { Outlet } from "react-router"
import ScrollToTop from "../../scroll/ScrollToTop"

const OverRall = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
       <ScrollToTop/>
      <Footer/>
    </main>
  )
}

export default OverRall

