
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { fetchProducts } from "../redux/slices/productsSlice";
import "./Women.css";

function Women() {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const womenCategories = [
    "womens-dresses",
    "womens-shoes",
    "womens-bags",
  ];

  const womenProducts = products.filter((item) =>
    womenCategories.includes(item.category)
  );

  if (loading && products.length === 0) {
    return <p>Loading women's products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <div>
      <h2 className="women-title">Women Collection</h2>

      <div className="product-grid">
        {womenProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Women;
