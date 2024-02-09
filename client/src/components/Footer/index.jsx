import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Input, initMDB } from 'mdb-ui-kit';

initMDB({ Input });

export const Footer = () => {
  return (
    <footer>
      <div>© 2024 Copyright A. Collection</div>
      <div>
        <Link to="/privacypolicy" className="text-body">
          Privacy Policy
        </Link>
        {' | '}
        <Link to="/termsofuse" className="text-body">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
