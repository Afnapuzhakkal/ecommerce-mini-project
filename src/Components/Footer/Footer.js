import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <h2>MyShop</h2>
        <p>Your one-stop shop for fashion & beauty</p>
      </div>

      <div className="footer-links">

        {/* SHOP */}
        <div className="footer-box">
          <h4>Shop</h4>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/beauty">Beauty</Link>
        </div>

        {/* COMPANY */}
        <div className="footer-box">
          <h4>Company</h4>
          <Link to="/AboutUs">AboutUs</Link>
          <Link to="/Contact">Contact</Link>

        </div>

        {/* <div className="footer-box">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Returns</p>
          <p>FAQ</p>
          <p>Shipping</p>
        </div> */}


      </div>

      <div className="footer-bottom">
        <p>© 2026 MyShop. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
