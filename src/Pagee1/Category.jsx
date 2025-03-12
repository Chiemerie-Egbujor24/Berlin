import "./category.css"

import { products, products2 } from "../constant"
const Category = () => {

  
  return (
  <>
       <div className="Product-Catagori">Product Catagori</div> <br /><br />

       <div className="all2">
      <div className="first1">
        <span>All</span>
        <p>New</p>
        <p>Featured</p>
        <p>Offer</p>
        
      </div>
      <div className="first1">
        <p>Short by:</p>
        <p>Featured</p>
      </div>
    </div><br /><br />

    <div className="items1">
      {products.map((product)=>(
          
          
         <div key={product.id} className="image-price">
       <div className="image-part">
       <div className="new">New</div>
       <img src={product.url} alt="" />
     </div>
     <div className="price-part">
      <p> {product.description}</p>
      <h4> <span>PRICE: </span> {product.description}</h4>
     </div>
     </div>
     
      ))}    
        </div> 

        <div className="items1">
      {products2.map((product2)=>(
          
          
         <div key={product2.id} className="image-price">
       <div className="image-part">
       <div className="new">New</div>
       <img src={product2.url} alt="" />
     </div>
     <div className="price-part">
      <p> {product2.description}</p>
      <h4> <span>PRICE: </span> {product2.description}</h4>
     </div>
     </div>
     
      ))}    
        </div><br /><br /><br /><br /><br /><br /><br /><br />

        <div className="our">
          <div className="our-child">
            <div className="our1">
              <h1>Get Our <br /> Latest Offers News</h1>
              <p>Subscribe news latter</p>
            </div>
            <div className="our2">
              <div className="input1-holder">
              <div className="email"><p>Your email here</p></div>
                <button className="button0">Shop Now</button>
              </div>
            </div>
          </div>
        </div>


        
        <div className="key">
          <div className="box">
            <h4>Free Shipping Method</h4>
            <p>aorem ixpsacdolor sit <br />
             ameasecur adipisicing elitsfbr
              edasd.</p>
          </div>
          <div className="box">
            <h4>Secure Payment System</h4>
            <p>aorem ixpsacdolor sit <br />
             ameasecur adipisicing elitsfbr
              edasd.</p>
          </div>
          <div className="box">
            <h4>Secure Payment System</h4>
            <p>aorem ixpsacdolor sit <br />
             ameasecur adipisicing elitsfbr
              edasd.</p>
          </div>
          </div> 

          <div className="pictures">
            <div className="picture1"></div>
            <div className="picture2"></div>
            <div className="picture3"></div>
            <div className="picture4"></div>
            <div className="picture5"></div>
          </div> 
  </>
  )
}

export default Category
