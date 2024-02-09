import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Image1 from '../assets/Graphics/PlanGraphic.jpg';
import Image2 from '.../assets/Graphics/CurateGraphic.jpg';
import Image3 from '../assets/Graphics/HostGraphic.jpg';

const PartyInfo = () => {
  return (
    <div className="party-info-page">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="header">
        <h1>Host a Fine Art Party</h1>
      </header>

      {/* Sections with Graphic Images */}
      <section className="party-section">
        <img src={Image1} alt="Plan Section" className="section-image" />
        <div className="section-content">
          <h2>Plan</h2>
          <p>Plan a time, place, and theme for your event. Invite your guests and plan your menu.</p>
        </div>
      </section>

      <section className="party-section">
        <img src={Image2} alt="Curate Section" className="section-image" />
        <div className="section-content">
          <h2>Curate</h2>
          <p>Our curators focus on elevating the diverse voices of women, LGBTQ+, and POC artists and give your guests the opportunity to mingle with the artists.</p>
        </div>
      </section>

      <section className="party-section">
        <img src={Image3} alt="Host Section" className="section-image" />
        <div className="section-content">
          <h2>Host</h2>
          <p>Prepare to host your event while your space is transformed into a curated gallery for your guests to mingle with the artists, view, and purchase fine art pieces.</p>
        </div>
      </section>

      {/* Request Fine Art Party Button */}
      <div className="request-button">
        <Link to="/fineartparties" className="btn">
          Request Fine Art Party
        </Link>
      </div>
    </div>
  );
};

export default PartyInfo;
