import React from "react";
import "./home.css";
import { Top10 } from "../top10/Top10";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Home: React.FC = () => {
  const handleLogin = () => {
    window.location.href = `${API_BASE_URL}/login`;
  };

  return (
    <section id="home">
      <div className="home-container">
        <header className="header">Spotify Pulse</header>
        <p className="sub-text">
          Discover your musical preferences like never before with Spotify
          Pulse's key features
        </p>
        {/* Attach the event handler to the button */}
        <button className="login-button" onClick={handleLogin}>
          Login with Spotify
        </button>

        <div className="cards-container">
          {/* First Card */}
          <div className="info-card">
            <h2>Top Artists</h2>
            <p>Unearth your favorite Artists.</p>
          </div>

          {/* Second Card */}
          <div className="info-card">
            <h2>Top Tracks</h2>
            <p>
              Which songs have made the biggest impact on your listening habits?
            </p>
          </div>
        </div>
      </div>
      <div>
        <Top10 />
      </div>
    </section>
  );
};

export default Home;
