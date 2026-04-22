import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

function Search() {
  const [products, setProducts] = useState([]);

  const search = localStorage.getItem("search") || "";

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => {

        const searchText = search.toLowerCase();




const filtered = data.products.filter(item =>
  item.title?.toLowerCase().includes(searchText) ||
  item.category?.toLowerCase().includes(searchText) ||
  item.description?.toLowerCase().includes(searchText)
);

        setProducts(filtered);
      });
  }, [search]); //  important

  return (
    <div>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="product-grid">
          {products.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;