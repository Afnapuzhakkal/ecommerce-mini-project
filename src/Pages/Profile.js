
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";
import "./Profile.css";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { user, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "1234"
    ) {
      dispatch(
        login({
          email: email,
          name: "Admin",
        })
      );

      setEmail("");
      setPassword("");
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("Logged out successfully");
  };

  if (isLoggedIn) {
    return (
      <div className="login-container">
        <h2>My Profile</h2>

        <p>Welcome, {user?.name || user?.email}!</p>
        <p>Email: {user?.email}</p>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Profile;
