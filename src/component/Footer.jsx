import "./footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
    <div className="one">
     <h4>Egbujor<span style={{color:"red"}}>24</span></h4> <br />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing
       elit. Quae atque dolor error qui laborum commodi placeat 
       doloribus aut maxime nulla, asperiores dolorem magni
        maiores amet 
      culpa vel velit modi tenetur!</p>
    </div>
    <div className="two">
      <h5>Quick Links</h5><br />
      <p>About us</p>
      <p>Offers & Discounts</p>
      <p>Get Coupon</p>
      <p>Contact Us</p>
    </div>
    <div className="three">
    <h5>New Products</h5><br />
    <p>Woman Cloth</p>
    <p>Fashion Accessories</p>
    <p>Man Accessories</p>
    <p>Rubber made Toys</p>

    </div>
    <div className="four">
      <h5>Support</h5><br />
      <p>Frequently Asked Questions</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      <p>Report a Payment Issue</p>
    </div>
    </div><br /><br />
    <div className="footer-icon">
      <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
    <div className="social-media">
<a href="https://facebook.com" target="_blank"  rel="noopener noreferrer">
          <FaFacebook size={40} color="blue" className="fitt"/>
          </a>
          
          <a href="https://instagram.com" target="_blank"  rel="noopener noreferrer">
          <FaInstagram size={40} color="purple" className="fitt"/>
          </a>

          <a href="https://twitter.com" target="_blank"  rel="noopener noreferrer">
          <FaTwitter size={40} color="skyblue" className="fitt"/>
          </a>

          <a href="https://tiktok.com" target="_blank"  rel="noopener noreferrer">
          <FaTiktok size={40} color="black" className="fitt"/>
          </a>
</div>
    </div>
   </footer>

  )
}

export default Footer
