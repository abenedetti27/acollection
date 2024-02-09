import React from 'react';
import { Link } from 'react-router-dom';

// Import artwork images for the gallery
import Artwork1 from '../assets/gallery/artwork1.jpg';
import Artwork2 from '../assets/gallery/artwork2.jpg';
import Artwork3 from '../assets/gallery/artwork3.jpg';
// Add more artwork imports as needed

const Galleries = () => {
  // Array of artwork objects with information
  const artworks = [
    { id: 1, image: Artwork1, title: 'Artwork 1', theme: 'Abstract' },
    { id: 2, image: Artwork2, title: 'Artwork 2', theme: 'Landscape' },
    { id: 3, image: Artwork3, title: 'Artwork 3', theme: 'Portrait' },
    // Add more artworks as needed
  ];

  return (
    <div className="gallery-page">
      <h1>Artwork Gallery</h1>

      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <Link to={`/gallery/${artwork.theme}/${artwork.id}`} key={artwork.id} className="artwork-item">
            <img src={artwork.image} alt={artwork.title} />
            <div className="artwork-info">
              <h2>{artwork.title}</h2>
              <p>Theme: {artwork.theme}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Galleries;
