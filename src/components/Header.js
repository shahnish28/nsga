import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="./logo.png" alt="NSGA Logo" className="logo" />
      <img src="./logo_hinglish.png" alt="NSGA Logo" className="logo1" />
      <div className="logo"></div>
      <nav>
        <ul>
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
        </ul>
      </nav>
      <a href="#classes" className="cta-button">
        Join a Class
      </a>
    </header>
  );
}

export default Header;
