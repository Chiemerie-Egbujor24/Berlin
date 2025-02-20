import "./overRall.css"
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import { Outlet } from "react-router"

const OverRall = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default OverRall

