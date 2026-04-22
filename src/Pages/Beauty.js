import React from 'react'
import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import './Beauty.css'

function Beauty() {
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/products/category/beauty").then(res => res.json()),
      fetch("https://dummyjson.com/products/category/fragrances").then(res => res.json()),
      fetch("https://dummyjson.com/products/category/skincare").then(res => res.json())
    ])
    .then(([beauty, fragrances, skincare]) => {
      const all = [
        ...beauty.products,
        ...fragrances.products,
        ...skincare.products
      ];
      setProducts(all);
    });
  }, []);
  return (
    <div>
      <h2>Beauty products</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
        </div>
    </div>
  )
}

export default Beauty
