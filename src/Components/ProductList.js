import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products)) // ⚠️ important
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-grid">
      {products.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;