
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { fetchProducts } from "../redux/slices/productsSlice";
import "./Kids.css";

function Kids() {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // Select only products you want to display in Kids Collection.
  // Replace these IDs with products you've verified are suitable.
  const kidsProductIds = [];

  const kidsProducts = products.filter((item) =>
    kidsProductIds.includes(item.id)
  );

  if (loading && products.length === 0) {
    return <p>Loading kids' products...</p>;
  }

  if (error) {
    return <p>Error loading kids' products: {error}</p>;
  }

  return (
    <div>
      <h2 className="kids-title">Kids Collection</h2>

      <div className="product-grid">
        {kidsProducts.length > 0 ? (
          kidsProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p>No kids' products available yet.</p>
        )}
      </div>
    </div>
  );
}

export default Kids;
