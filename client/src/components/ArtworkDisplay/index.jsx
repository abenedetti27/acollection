import React from 'react';

const ArtworkDisplay = ({ artwork }) => {
  return (
    <div className="artwork-display">
      <img src={artwork.imageUrl} alt={artwork.title} />
      <p>{artwork.title}</p>
      <p>By {artwork.artist}</p>
      <p>${artwork.price}</p>
      {/* Add more details or interactions as needed */}
    </div>
  );
};

export default ArtworkDisplay;
