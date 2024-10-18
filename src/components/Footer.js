import React from "react";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
// import logo from "../path_to_your_logo/logo.png"; // Add the path to your logo
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://instagram.com/navrangshaileegarbaacademy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="tel:8980413169">
          <FaPhone />
        </a>
        <a
          href="https://wa.me/8980413169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      <p className="footer-text">
        © 2024 Navrang Shailee Garba Academy. All Rights Reserved.
      </p>

      <div className="logo-container">
        <img
          src="logo.png"
          alt="Garba Dance Crew Logo"
          className="footer-logo"
        />
      </div>
    </footer>
  );
}

export default Footer;
