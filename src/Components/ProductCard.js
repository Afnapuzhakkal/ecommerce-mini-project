import { Link } from "react-router-dom";


function ProductCard({ product, addToWishlist, addToCart }) {
  return (
    <div className="product-card">
       
       {/* <i
        className="fa-regular fa-heart wishlist-icon"
        onClick={() => addToWishlist(product)} ></i>  */}
        
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
        
        <img src={product.thumbnail} alt={product.title} />

        <h4>{product.title}</h4>

        <p>₹ {product.price}</p>

      </Link>

    </div>
  );
}

export default ProductCard;