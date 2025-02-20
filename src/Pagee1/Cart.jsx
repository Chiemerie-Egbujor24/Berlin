import "./cart.css"
import { MdDelete } from "react-icons/md";
const Cart = () => {
  return (
    <>
    <div className="cart-page">
        
        <div className="details-quantity-price-total">
        <div className="cart-details">
            <div className="details-image"></div>
            <div className="details-text">
                <h6>Details</h6>
                <p>Name</p>
                <MdDelete size={40} style={{color:"red",}}/>
            </div>
        </div>
        
            <div className="quantity">
                <p>QUANTITY</p><br /><br />
                <div className="quantity-count1">
                    <button>-</button>
                    <h2>2</h2>
                    <button>+</button>
                    </div><br />

            </div>

            <div className="price">
                <p>PRICE</p><br /><br />
                <span>$00.000</span>
            </div>

            <div className="total">
                <p>TOTAL</p><br /><br />
                <span>$00.000</span>
            </div>
        </div>
        
        <div className="details-quantity-price-total">
        <div className="cart-details">
            <div className="details-image"></div>
            <div className="details-text">
                <h6>Details</h6>
                <p>Name</p>
                <MdDelete size={40} style={{color:"red",}}/>
            </div>
        </div>
        
            <div className="quantity">
                <p>QUANTITY</p><br /><br />
                <div className="quantity-count1">
                    <button>-</button>
                    <h2>2</h2>
                    <button>+</button>
                    </div><br />

            </div>

            <div className="price">
                <p>PRICE</p><br /><br />
                <span>$00.000</span>
            </div>

            <div className="total">
                <p>TOTAL</p><br /><br />
                <span>$00.000</span>
            </div>
        </div>

        
        <div className="details-quantity-price-total">
        <div className="cart-details">
            <div className="details-image"></div>
            <div className="details-text">
                <h6>Details</h6>
                <p>Name</p>
                <MdDelete size={40} style={{color:"red",}}/>
            </div>
        </div>
        
            <div className="quantity">
                <p>QUANTITY</p><br /><br />
                <div className="quantity-count1">
                    <button>-</button>
                    <h2>2</h2>
                    <button>+</button>
                    </div><br />

            </div>

            <div className="price">
                <p>PRICE</p><br /><br />
                <span>$00.000</span>
            </div>

            <div className="total">
                <p>TOTAL</p><br /><br />
                <span>$00.000</span>
            </div>
        </div>


        
        <div className="details-quantity-price-total">
        <div className="cart-details">
            <div className="details-image"></div>
            <div className="details-text">
                <h6>Details</h6>
                <p>Name</p>
                <MdDelete size={40} style={{color:"red",}}/>
            </div>
        </div>
        
            <div className="quantity">
                <p>QUANTITY</p><br /><br />
                <div className="quantity-count1">
                    <button>-</button>
                    <h2>2</h2>
                    <button>+</button>
                    </div><br />

            </div>

            <div className="price">
                <p>PRICE</p><br /><br />
                <span>$00.000</span>
            </div>

            <div className="total">
                <p>TOTAL</p><br /><br />
                <span>$00.000</span>
            </div>
        </div>

         </div>
         </>
  )
}

export default Cart
