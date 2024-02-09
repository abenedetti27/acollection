import React from 'react';

const ContactPage = () => {
  const emailAddress = 'a.collectionSEA@gmail.com';
  const instagramAccount = '@collectionSEA'; // Replace with the actual Instagram account

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <p>If you have any inquiries, feel free to reach out to us:</p>
        <p>Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
        <p>Follow us on Instagram: <a href={`https://www.instagram.com/${instagramAccount}`} target="_blank" rel="noopener noreferrer">{instagramAccount}</a></p>
      </div>

      {/* Add a contact form or additional contact information as needed */}
    </div>
  );
};

export default ContactPage;
