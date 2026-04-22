import React from 'react';
import './Offers.css';
import offerimage from '../../assets/offerimage.gif'
// import hero from "../assets/hero.jpg";

function Offers() {
  return (
    <div className='offer-banner'>
      <div className="offer-left">
      <h1>EXCLISIVE</h1>
      <h1>OFFERS FOR YOU</h1>
      <p>ONLY ON BEST SELLER PRODUCT</p>
      <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={offerimage} alt='offer-image'/>
      </div>
      

      
    </div>
  )
}

export default Offers
