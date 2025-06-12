import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Private Chef</h1>
        <p>Experience the art of fine dining in the comfort of your home</p>
        <Link to="/contact" className="cta-button">
          Book Now
        </Link>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Personalized Menus</h2>
          <p>Customized dining experiences tailored to your preferences</p>
        </div>
        <div className="feature">
          <h2>Professional Service</h2>
          <p>Expert chefs with years of culinary experience</p>
        </div>
        <div className="feature">
          <h2>Quality Ingredients</h2>
          <p>Only the finest, freshest ingredients used in every dish</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
