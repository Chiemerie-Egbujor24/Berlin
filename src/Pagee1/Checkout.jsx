import "./checkout.css"
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import product4 from "../Images/product4.webp"
import product5 from "../Images/product5.png.webp"
import product6 from "../Images/product6.png.webp"
import product7 from "../Images/product7.webp"
import product8 from "../Images/product8.webp"
import product9 from "../Images/product9.webp"
const Checkout = () => {
  const [change, setChange] = useState(1)

  function increment(){
    setChange(change + 1)
  }


  function decrement(){
    
    setChange(change - 1)
  }
  useEffect(()=>{
    const interval = setInterval(() =>{
      setChange((prevCount) => (prevCount - 1 + picz . length) % picz.length);
    },4000)

    return () =>clearInterval (interval)
  }, []);


  const picz=[
    product4,
    product5,
    product6,
    product7,
    product8,
    product9
  
  ];
  return (
    <>
    <div className="Product-details">Product Details </div><br /><br /><br /><br /><br />
    <div className="changing">
      <FaChevronCircleLeft onClick={decrement} size={50} className="click"/>
      <div className="changing-images">
        <img src={picz[change]} alt="" />
      </div>
    <FaChevronCircleRight onClick={increment} size={50} className="click1"/>
    </div><br /><br /><br />

    <div className="foam">
      <h1>Foam filling cotton slow <br /> rebound pillows</h1>
      <p>Seamlessly empower fully researched growth strategies and 
        interoperable internal or “organic” sources. <br /> Credibly innovate
         granular internal or “organic” sources whereas high standards 
         in web-readiness. <br /> 
         Credibly innovate granular internal or organic sources 
         whereas high standards 
         in web-readiness. <br /> Energistically scale future-proof core
          competencies vis-a-vis impactful experiences. <br /> Dramatically
           synthesize integrated schemas. 
         with optimal networks.</p>
    </div><br />

    <div className="foam-quantity-container">
    <div className="foam-quantity">
      <p>Quantity</p>
    <button className="minus">Minus</button>
    <h3>0</h3>
    <button className="plus">Plus</button>
    <p>$9</p>
    </div>


    <button className="add">Add To Cart</button>
    </div>

    <div className="promotion">
      <h2>Get promotions & updates!</h2>
      <p>Seamlessly empower fully researched growth <br /> strategies and 
        interoperable internal or “organic”
         sources credibly innovate granular internal .</p><br /><br />
         <div className="input-holder">
              <div className="email"><p>Your email here</p></div>
                <button className="button">Shop Now</button>
              </div>
    </div>
    </>
  )
}

export default Checkout
