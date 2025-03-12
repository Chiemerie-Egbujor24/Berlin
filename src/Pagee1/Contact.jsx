import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
const Contact = () => {
  return (
    <>
    <div className="contactWrapper">
      contact
    </div>

    <div className="get-in-touch">
      <div className="black"></div>
    </div>

    <div className="contact-us">
      <div className="contact-us1">
      <h1>  Get in Touch</h1>
        <textarea placeholder="Enter your message"></textarea>
        <div className="name-email">
          <input type="text" placeholder="Enter your name"/>
          <input type="text" placeholder="Email" />
        </div>
        <input type="text" placeholder="Enter your name"/>
        <button>SEND</button>
      </div>
      <div className="contact-us2">

        <div className="contact-icon">
        <MdOutlineEmail size={36}/>
        <RiHome4Line size={36}/>
        <HiMiniDevicePhoneMobile size={36}/>
        </div>


        <div className="contact-text">
          <div className="contact-text1">
            <h2>Buttonwood, California.</h2>
            <p>Rosemead, CA 91770</p>
          </div>
          <div className="contact-text1">
            <h2> +1 253 565 2365</h2>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
          <div className="contact-text1">
            <h2> support@colorlib.com</h2>
            <p>Send us your query anytime!</p>
          </div>

        </div>

      </div>
    </div>
    
    </>
  )
}

export default Contact
