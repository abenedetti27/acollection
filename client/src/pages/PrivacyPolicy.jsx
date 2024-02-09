import React from 'react';
import Logo from '../assets/logo/logo.png';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      {/* Logo in the upper left-hand corner */}
      <img src={Logo} alt="Logo" className="logo" />

      {/* Header */}
      <header>
        <h1>Privacy Policy</h1>
      </header>

      {/* Body */}
      <div className="privacy-policy-body">
        <p>
          Effective Date: 2/8/2024
        </p>

        <p>
          Thank you for choosing A. Collection. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information.
          By using our website and services, you consent to the terms of this Privacy Policy.
        </p>

        <ol>
          <li>
            <strong>Information We Collect:</strong>
            <ol type="a">
              <li>
                <strong>Personal Information:</strong> When you register for an account, we collect information such as your name, email address, and contact details.
                Artists submitting their work provide information about themselves and their artworks.
              </li>
              <li>
                <strong>Transaction Information:</strong> When you make a purchase, we collect necessary information for payment and shipping.
              </li>
              <li>
                <strong>Usage Information:</strong> We may collect data on how you interact with our platform, including page views, clicks, and other actions.
              </li>
            </ol>
          </li>

          <li>
            <strong>How We Use Your Information:</strong>
            <ol type="a">
              <li>
                <strong>Providing Services:</strong> To facilitate the display and sale of artworks. To process transactions and provide customer support.
              </li>
              <li>
                <strong>Communication:</strong> To communicate with you about your account, purchases, and updates.
              </li>
              <li>
                <strong>Improving Services:</strong> To analyze usage patterns and improve our website and services.
              </li>
            </ol>
          </li>

          <li>
            <strong>Information Sharing:</strong>
            <ol type="a">
              <li>
                <strong>Artists and Buyers:</strong> Limited information is shared between artists and buyers to facilitate transactions.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share information with trusted third-party service providers for purposes such as payment processing and shipping.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose information to comply with legal obligations or respond to law enforcement requests.
              </li>
            </ol>
          </li>

          <li>
            <strong>Your Choices:</strong>
            <ol type="a">
              <li>
                <strong>Account Information:</strong> You can review and update your account information at any time.
              </li>
              <li>
                <strong>Marketing Communications:</strong> You can opt-out of marketing communications by following the instructions in the communication.
              </li>
            </ol>
          </li>

          <li>
            <strong>Security:</strong> We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure.
          </li>

          <li>
            <strong>Cookies:</strong> We use cookies to enhance your experience on our website. You can manage cookie preferences through your browser settings.
          </li>

          <li>
            <strong>Changes to the Privacy Policy:</strong> We may update this Privacy Policy to reflect changes in our practices. We will notify you of any material changes.
          </li>

          <li>
            <strong>Contact Us:</strong> For questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:a.collectionSEA@gmail.com">a.collectionSEA@gmail.com</a>.
          </li>
        </ol>

        <p>
          By using A. Collection, you agree to the terms of this Privacy Policy. Thank you for trusting us with your information.
        </p>

        <p>
          A. Collection PO Box TKTK <a href="mailto:a.collectionSEA@gmail.com">a.collectionSEA@gmail.com</a> xxx-xxx-xxxx
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
