import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  //  Wishlist function

  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist ");
    } else {
      alert("Already in Wishlist ");
    }
  };
  // ADD TO CART

  const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find((item) => item.id === product.id);

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart ");

    // ADD THIS
    window.location.href = "/cart";    // redirect to cart page
  } else {
    alert("Already in Cart ");
  }
};

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div className="detail-container">
      
      <img src={product.thumbnail} alt={product.title} />

      <div>
        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <h3>₹ {product.price}</h3>
        <h3>{product.brand}</h3>

        <p><i className="fa-solid fa-star" style={{ color: "gold" }}></i> {product.rating}</p>
        <p>{product.warrantyInformation}</p>
        <p>{product.shippingInformation}</p>
        <p>{product.availabilityStatus}</p>

        <p>Category: {product.category}</p>

        {/*  WISHLIST BUTTON */}

        <button onClick={() => addToWishlist(product)}>
          <i className="fa-solid fa-heart"></i> Add to Wishlist
        </button>

{/* ADD TO CART BUTTON */}
<button onClick={() => addToCart(product)}>
  Add to Cart
</button>

      </div>
    </div>
  );
}

export default ProductDetail;