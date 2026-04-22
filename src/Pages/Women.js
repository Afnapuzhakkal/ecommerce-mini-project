import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import './Women.css';

function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  Promise.all([
    fetch("https://dummyjson.com/products/category/womens-dresses").then(res => res.json()),
    fetch("https://dummyjson.com/products/category/womens-shoes").then(res => res.json()),
    fetch("https://dummyjson.com/products/category/womens-bags").then(res => res.json())
  ])
  .then(([dresses, shoes, bags]) => {
    const all = [
      ...dresses.products,
      ...shoes.products,
      ...bags.products
    ];
    setProducts(all);
  });
}, []);
  

  
  return (
    <div>
      <h2 className="women-title">Women Collection</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Women;