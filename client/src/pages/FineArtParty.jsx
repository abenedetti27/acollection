import React from 'react';

const FineArtParty = () => {
  return (
    <div className="fine-art-party-page">
      <h1>Fine Art Party</h1>

      <div className="party-description">
        <p>
          Enhance your personal art collection with unique pieces carefully curated from local artists. Immerse yourself in a selection that not only adds sophistication and originality to your space but also offers the opportunity for party guests to purchase their favorite artworks.
        </p>
        <p>
          Bring a touch of sophistication and originality to your gala, benefit, or private event. Mingle with artists and curators, adding an extra layer of exclusivity and creativity to your occasion.
        </p>
        <p>
          Our curators focus on showcasing the diverse voices of women, LGBTQ, and POC artists, ensuring a rich and inclusive selection for your enjoyment.
        </p>
      </div>

      <div className="contact-form">
        <h2>Contact Us for Inquiries</h2>
        <form>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="requests">Specific Requests:</label>
          <textarea id="requests" name="requests" rows="4"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FineArtParty;
