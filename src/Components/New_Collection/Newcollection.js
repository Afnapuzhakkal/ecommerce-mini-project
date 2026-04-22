import React, { useState, useEffect } from 'react';
import './Newcollection.css';
import ProductCard from '../ProductCard';


function Newcollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/products/category/mens-shirts").then(res => res.json()),
      fetch("https://dummyjson.com/products/category/womens-dresses").then(res => res.json()),
      fetch("https://dummyjson.com/products/category/beauty").then(res => res.json())
    ])
    .then(([men, women, beauty]) => {
      const allProducts = [
        ...men.products,
        ...women.products,
        ...beauty.products
      ];

      setProducts(allProducts.slice(0, 8)); // show 8
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className='new-collection'>
      <h1>NEW COLLECTION</h1>

      <div className="collection-grid">
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Newcollection;