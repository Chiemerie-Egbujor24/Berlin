import "./category.css"
import product4 from "../Images/product4.webp"
import product5 from "../Images/product5.png.webp"
import product6 from "../Images/product6.png.webp"
import product7 from "../Images/product7.webp"
import product8 from "../Images/product8.webp"
import product9 from "../Images/product9.webp"
const Category = () => {

   const products=[
      {id: 4, url: product4, title: "Green Dress with details", description:" $40.00 $60.00"},
      {id: 5, url: product5, title: "Green Dress with details", description: "$40.00 $60.00"},
      {id: 6, url: product6, title: "Green Dress with details", description: "$40.00 $60.00"},
    ]
  
    const products2=[
      {id: 7, url: product7, title: "Green Dress with details", description: "$40.00 $60.00"},
     {id: 8, url: product8, title: "Green Dress with details", description: "$40.00 $60.00"},
     {id: 9, url: product9, title: "Green Dress with details", description: "$40.00 $60.00"},
    ]
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
                <button className="button2">Shop Now</button>
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
