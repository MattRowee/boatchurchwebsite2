import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="background">
      <div className="overlay">
        <img src="/bcmothlogowhite.png" alt="Logo" className="overlay_image" />
        <h1>Boat Church loves you</h1>
        <p>Full website coming soon.</p>
      </div>
    </div>
  );
};

export default HomePage;