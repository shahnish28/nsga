import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>
        We are a passionate team of Garba dancers and teachers, dedicated to
        preserving and promoting the traditional Garba dance.
      </p>
      <div className="about-images">
        <img src="about1.jpg" alt="Garba Dance 1" />
        <img src="about2.jpg" alt="Garba Dance 2" />
      </div>
    </section>
  );
}

export default About;
