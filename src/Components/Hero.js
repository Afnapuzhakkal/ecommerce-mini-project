import React, { useState ,useEffect} from "react";
import "./Hero.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg"

      const images =[hero1, hero2, hero3];

function Hero(){
      const [index, setIndex]=useState(0);
      useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

return(

<div className="hero-image">

{/* <img src={hero1,her} alt="hero"/> */}
<img src={images[index]} alt="hero"/>


</div>

);

}

export default Hero;