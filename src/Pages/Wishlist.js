import React, { useEffect, useState } from "react";

function Wishlist() {
  const [items, setItems] = useState([]);

  //  Load wishlist from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setItems(data);
  }, []);

  // Remove item
  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Wishlist </h2>

      {items.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                margin: "10px",
              }}
            >
              <img src={item.thumbnail} width="100" alt={item.title} />

              <h4>{item.title}</h4>

              <p>₹ {item.price}</p>

              <button onClick={() => removeItem(item.id)}>
                Remove 
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;