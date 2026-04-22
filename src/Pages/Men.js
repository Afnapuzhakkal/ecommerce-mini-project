import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import './Men.css';

function Men() {
  const [products, setProducts] = useState([]);


  //ADD TO WHISHLIST
  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist ");
    } else {
      alert("Already in Wishlist ");
    }
  };
  

  useEffect(() => {
  fetch("https://dummyjson.com/products?limit=100")
    .then(res => res.json())
    .then(data => {
      console.log(data.products);

      const menProducts = data.products.filter(item =>
        item.category.includes("mens") ||
        item.category.includes("shirts") ||
        item.category.includes("shoes")
      );

      setProducts(menProducts);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

  
  return (
    <div>
      <h2 className="men-title">Men Collection</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} 
          addToWishlist={addToWishlist}/>
        ))}
      </div>
    </div>
  );
}

export default Men;