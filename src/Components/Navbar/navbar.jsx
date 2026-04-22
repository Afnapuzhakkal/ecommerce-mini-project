import React, { useState } from 'react';
import "./navbar.css";
import logo from '../../assets/logo.jpg';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    //  save search text
    localStorage.setItem("search", search);

    // go to search page
    navigate("/search");

    //  clear input AFTER navigation (clean UX)
    setSearch("");
  };

  return (
    <div className="main-nav">

      {/* LOGO */}
      <div className="nav-logo">
        <img src={logo} alt="logo" width="70" />
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kids">KIDS</Link></li>
        <li><Link to="/beauty">BEAUTY</Link></li>
      </ul>

      {/* SEARCH BAR */}
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn search-btn" type="submit">
          Search
        </button>
      </form>

      {/* ICONS */}
      <div className="profile-container">
        <i className="fa-solid fa-circle-user"></i>
        <Link to="/profile">PROFILE</Link>
      </div>

      <div className="wishlist-cont" > 
        <i className="fa-solid fa-heart" style={{ color: "black" }}></i>
        <Link to="/wishlist">WISHLIST</Link>
      </div>

      <div className="cart">
        <i className="fa-solid fa-basket-shopping"></i>
        <Link to="/cart">CART</Link>
      </div>

    </div>
  );
}

export default Navbar;