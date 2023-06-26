import React from "react";
import './Style.css'
import me from '../assets/me.jpeg'

const Home = () => {
  return (
    <div className="home-container">

      <div className="first-block">
        <h2 className="introduction-text">
          Hi! I'm Olti
        </h2>
        <p>
          Data Scientist and ML Engineer
        </p>
      </div>
      <img src={me} className="me-image" />
    </div>
  );
};

export default Home;
