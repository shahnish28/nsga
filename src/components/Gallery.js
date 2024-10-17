import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <img src="gallery1.jpg" alt="Garba 1" />
        <img src="gallery2.jpg" alt="Garba 2" />
        <img src="gallery3.jpg" alt="Garba 3" />
        <img src="gallery4.jpg" alt="Garba 4" />
      </div>
    </section>
  );
}

export default Gallery;
