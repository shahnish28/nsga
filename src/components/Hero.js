import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Master the Art of Garba with Us!</h1>
          <p>
            Join Navrang Shailee Garba Academy and experience the joy of
            traditional dance.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="button">
              Learn More
            </a>
            <a href="#join" className="button">
              Join a Class
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
