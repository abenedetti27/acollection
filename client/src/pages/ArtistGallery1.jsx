import React from 'react';
import { Link } from 'react-router-dom';
import Artist1Artwork1 from '../assets/artworks/artist1_artwork1.jpg'; // Import artwork image for Artist 1, Artwork 1
import Artist1Artwork2 from '../assets/artworks/artist1_artwork2.jpg'; // Import artwork image for Artist 1, Artwork 2
import Artist1Artwork3 from '../assets/artworks/artist1_artwork3.jpg'; // Import artwork image for Artist 1, Artwork 3

const ArtistGalleryPage = () => {
  const artistName = 'Artist Name'; // Replace with the actual artist's name

  // Array of artwork images for the artist
  const artistArtworks = [
    { id: 1, image: Artist1Artwork1, title: 'Artwork 1', price: 100 },
    { id: 2, image: Artist1Artwork2, title: 'Artwork 2', price: 150 },
    { id: 3, image: Artist1Artwork3, title: 'Artwork 3', price: 120 },
    // Add more artworks as needed
  ];

  return (
    <div className="artist-gallery-page">
      <h1>{artistName}'s Gallery</h1>

      <div className="artwork-grid">
        {artistArtworks.map((artwork) => (
          <Link to={`/product/${artwork.id}`} key={artwork.id} className="artwork-item">
            <img src={artwork.image} alt={artwork.title} />
            <div className="artwork-info">
              <h2>{artwork.title}</h2>
              <p>${artwork.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtistGalleryPage;
