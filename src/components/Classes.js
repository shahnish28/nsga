import React from "react";
import "./Classes.css";

function Classes() {
  return (
    <section id="classes" className="classes">
      <h2>Our Classes</h2>
      <p>
        Whether you are a beginner or a pro, we have classes for all levels!
      </p>
      <div className="class-list">
        <div className="class-item">
          <h3>Beginner</h3>
          <p>Get started with the basics of Garba.</p>
        </div>
        <div className="class-item">
          <h3>Intermediate</h3>
          <p>Build on your skills and learn new moves.</p>
        </div>
        <div className="class-item">
          <h3>Advanced</h3>
          <p>Master complex routines and become a pro!</p>
        </div>
      </div>
    </section>
  );
}

export default Classes;
