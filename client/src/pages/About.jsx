import React from 'react';
import Founder1Image from '../assets/founders/founder1.jpg'; // Import the image for Founder 1
import Founder2Image from '../assets/'; // Import the image for Founder 2

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      
      <div className="founder">
        <img src={Founder1Image} alt="Founder 1" />
        <div className="bio">
          <h2>Founder 1 Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris ut ante dapibus fringilla. 
            Fusce ut nisi in urna cursus blandit. Duis euismod augue a risus efficitur, in volutpat quam bibendum.
          </p>
        </div>
      </div>

      <div className="founder">
        <img src={Founder2Image} alt="Founder 2" />
        <div className="bio">
          <h2>Founder 2 Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris ut ante dapibus fringilla. 
            Fusce ut nisi in urna cursus blandit. Duis euismod augue a risus efficitur, in volutpat quam bibendum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
