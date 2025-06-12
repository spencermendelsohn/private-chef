import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    {
      id: 1,
      src: "/images/dish1.jpg",
      alt: "Signature Dish 1",
      description: "Pan-seared sea bass with citrus sauce",
    },
    {
      id: 2,
      src: "/images/dish2.jpg",
      alt: "Signature Dish 2",
      description: "Truffle-infused risotto",
    },
    {
      id: 3,
      src: "/images/dish3.jpg",
      alt: "Signature Dish 3",
      description: "Wagyu beef with seasonal vegetables",
    },
    // Add more images as needed
  ];

  return (
    <div className="gallery">
      <h1>Our Culinary Creations</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
