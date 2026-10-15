
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { fetchProducts } from "../redux/slices/productsSlice";
import "./Beauty.css";

function Beauty() {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const beautyCategories = [
    "beauty",
    "fragrances",
    "skin-care",
  ];

  const beautyProducts = products.filter((item) =>
    beautyCategories.includes(item.category)
  );

  if (loading && products.length === 0) {
    return <p>Loading beauty products...</p>;
  }

  if (error) {
    return <p>Error loading beauty products: {error}</p>;
  }

  return (
    <div>
      <h2>Beauty products</h2>

      <div className="product-grid">
        {beautyProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Beauty;
