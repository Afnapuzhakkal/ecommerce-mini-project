
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { fetchProducts } from "../redux/slices/productsSlice";
import "./Men.css";

function Men() {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // ADD TO WISHLIST
  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist");
    } else {
      alert("Already in Wishlist");
    }
  };

  const menProducts = products.filter(
    (item) =>
      item.category.includes("mens") ||
      item.category.includes("shirts") ||
      item.category.includes("shoes")
  );

  if (loading && products.length === 0) {
    return <p>Loading men's products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <div>
      <h2 className="men-title">Men Collection</h2>

      <div className="product-grid">
        {menProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default Men;
