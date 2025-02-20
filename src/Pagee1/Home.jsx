import "./home.css"
import category1 from "../Images/category1.webp"
import category2 from "../Images/category2.webp"
import category3 from "../Images/category3.webp"
import product4 from "../Images/product4.webp"
import product5 from "../Images/product5.png.webp"
import product6 from "../Images/product6.png.webp"
import product7 from "../Images/product7.webp"
import product8 from "../Images/product8.webp"
import product9 from "../Images/product9.webp"
const Home = () => {

  const category=[
    {id: 1, url: category1, title: "Owmen's", description:" New Collection"},
    {id: 2, url: category2, title: "Winter Cloth", description: "Discount!"},
    {id: 3, url: category3, title: "Man`s Cloth", description: "New Collection"},
  ];

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
       <div className="discount">
    <div className="image1"></div>
    <div className="text1">
      <i>60% Discount</i>
      <h1>Winter <br /> Collection</h1>
        <p>Best Clothes Collection By 2020!</p>
        <button className="button1">Shop Now</button>
    </div>  
    </div><br /><br /><br /><br />
    

    <h2>Shop by Category</h2><br />

    <section>
      
      {category.map((categories)=>(

             <div key={categories.id} className="owmens-image-text-holder">
              <img src={categories.url} alt="" />
             <div className="texts2">
             <i>{categories.description}</i>
             <h3>{categories.title}</h3>
             </div>
             
          </div>
        ))} 
   
    </section>
    

    <div className="section2">
      <div className="product">
        <h3>Latest Products</h3>
        <div className="all1">
        <span>All</span>
        <p>New</p>
        <p>Featured</p>
        <p>Offer</p>
        </div> 
      </div>
    </div>


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



        <div className="best">
          <div className="best-child">
            <div className="best-image"></div>
            <div className="best-text">
              <h1>Find The Best Product <br /> from Our Shop</h1>
              <p>Designers who are interesten creating state ofthe.</p>
              <button className="button3">Shop Now</button>
            </div>
            <div className="best-cloth"></div>
          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div className="collection">
          <div className="collection1">
          <h1>Best Collection  of This Month</h1>
              <p>Designers who are interesten crea</p>
              <button className="button4">Shop Now</button>
              <div className="trouser1"></div>
          </div>
          <div className="collection2"></div>
          <div className="collection3">
            <div className="collection3-1">
              <h2>Menz Winter <br /> Jacket</h2>
              <div className="image3-1"></div>
            </div>

            <div className="collection3-2">
              <h2>Menz Winter <br /> Jacket</h2>
              <div className="image3-2"></div>
            </div>
            <div className="collection3-3">
              <h2>Menz Winter <br /> Jacket</h2>
              <div className="image3-3"></div>
            </div>
          </div>
        </div>


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

export default Home
