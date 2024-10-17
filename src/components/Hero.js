import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title animate__animated animate__fadeInDown">
          Discover the Joy of <span>Garba</span>
        </h1>
        <p className="hero-subtitle animate__animated animate__fadeInUp">
          Join the Navrang Shailee Garba Academy and experience the thrill of
          traditional Garba.
        </p>
        <div className="hero-buttons">
          <a
            href="#learn-more"
            className="cta-button animate__animated animate__zoomIn"
          >
            Learn More
          </a>
          <a
            href="#join-class"
            className="cta-button animate__animated animate__zoomIn"
          >
            Join a Class
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
