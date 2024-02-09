import React from 'react';

const ArtworkDetails = ({ artwork }) => {
  return (
    <div className="artwork-details">
      <img src={artwork.imageUrl} alt={artwork.title} />
      <h2>{artwork.title}</h2>
      <p>By {artwork.artist}</p>
      <p>${artwork.price}</p>
      <p>{artwork.description}</p>
      {/* Add more details or interactions as needed */}
    </div>
  );
};

export default ArtworkDetails;
