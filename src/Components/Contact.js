import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple action
    alert("Message sent successfully ✅");

    // clear form
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">

      <h1>Contact Us 📞</h1>
      <p>We’d love to hear from you!</p>

      <div className="contact-content">

        {/* LEFT SIDE */}
        <div className="contact-info">
          {/* <h3>Get in touch</h3> */}
          <p>Email: support@myshop.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Your City, India</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </div>
  );
}

export default Contact;