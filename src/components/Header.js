import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Logos on the right side */}
      <div className="logo-container">
        <img src="./logo.png" alt="NSGA Logo" className="logo" />
        <img
          src="./logo_hinglish.png"
          alt="NSGA Logo Hinglish"
          className="logo1"
        />
      </div>

      <nav>
        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#classes">Classes</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* "Join a Class" Button in the Dropdown */}
          <li>
            <a href="#classes" className="cta-button">
              Join a Class
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
