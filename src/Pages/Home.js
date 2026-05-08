import React from 'react'
// import ProductList from '../Components/ProductList'
import Hero from '../Components/Hero'
import "./Home.css"
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/New_Collection/Newcollection'
import Footer from '../Components/Footer/Footer'


function Home() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Footer/>
       {/* <div className='coupen'>
        <img src={coupen} alt='coupen-img'/>
      <h6>20% OFF On Your First Order</h6>

      </div> */}
      
  


{/* <ProductList/> */}

</div>
  )
}

export default Home
