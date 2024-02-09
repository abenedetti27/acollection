import React from 'react';
import { Link } from 'react-router-dom';
import Artist1Image from '../assets/artists/artist1.jpg'; // Import image for Artist 1
import Artist2Image from '../assets/artists/artist2.jpg'; // Import image for Artist 2

const ArtistsPage = () => {
  // Array of featured artists
  const featuredArtists = [
    {
      id: 1,
      name: 'Artist 1',
      image: Artist1Image,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris ut ante dapibus fringilla...',
    },
    {
      id: 2,
      name: 'Artist 2',
      image: Artist2Image,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris ut ante dapibus fringilla...',
    },
    // Add more artists as needed
  ];

  return (
    <div className="artists-page">
      <h1>Featured Artists</h1>

      <div className="artist-list">
        {featuredArtists.map((artist) => (
          <div key={artist.id} className="artist-item">
            <img src={artist.image} alt={artist.name} />
            <div className="artist-info">
              <h2>{artist.name}</h2>
              <p>{artist.bio}</p>
              <Link to={`/artists/${artist.id}`} className="artist-link">
                View Gallery
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
