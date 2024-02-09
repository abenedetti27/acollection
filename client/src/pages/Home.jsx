import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/1.png';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        {/* Navbar content */}
        {/* You can include your Navbar component here */}
      </nav>

      {/* Header with Logo */}
      <header className="header">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <h1>Curated Galleries & Fine Art Parties</h1>
      </header>

      {/* Subheader */}
      <div className="subheader">
        <p>Curate Elegance, Celebrate Diversity: Elevate Your Event with Artful Sophistication</p>
      </div>

      {/* Get Started Button */}
      <div className="get-started-button">
        <Link to="/PartyInfo" className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
