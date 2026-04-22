
import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(data);
  }, []);

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>My Cart </h2>

      {items.length === 0 ? (
        <p className="empty-text">No items in cart</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />

                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p>₹ {item.price}</p>

                  <button onClick={() => removeItem(item.id)}>
                    Remove 
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="cart-total">Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;