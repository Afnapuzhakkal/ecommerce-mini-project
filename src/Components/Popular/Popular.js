import React, { useEffect, useState } from "react";
import ProductCard from '../ProductCard'
import './Popular.css'

function Popular() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        // take only first 4 products as popular
        setProducts(data.products.slice(0, 10));
      });
  }, []);

  return (
    <div>
      <h2 style={{ margin: "20px" }}>Popular Products</h2>

      <div className="product-grid">
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Popular;