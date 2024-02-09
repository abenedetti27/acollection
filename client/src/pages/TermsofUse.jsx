import React from 'react';
import Logo from '../assets/logo/logo.png';

const TermsOfUse = () => {
  return (
    <div className="terms-of-use-page">
      {/* Logo in the upper left-hand corner */}
      <img src={Logo} alt="Logo" className="logo" />

      {/* Header */}
      <header>
        <h1>Terms of Use</h1>
      </header>

      {/* Body */}
      <div className="terms-body">
        <p>
          Welcome to A. Collection, an online platform dedicated to showcasing and promoting the work of talented artists.
          By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
          Please read these terms carefully before using our services.
        </p>

        <ol>
          <li>
            <strong>Acceptance of Terms:</strong> By using A. Collection, you acknowledge that you have read, understood,
            and agree to abide by these Terms of Use. If you do not agree to these terms, please refrain from using our services.
          </li>

          <li>
            <strong>User Eligibility:</strong> You must be at least 18 years old to use our services. By using the platform,
            you affirm that you are of legal age to enter into this agreement.
          </li>

          <li>
            <strong>Account Registration:</strong> To access certain features of the platform, you may be required to provide personal details.
            You agree to provide accurate, current, and complete information during this process and to update such information to keep it accurate, current, and complete.
          </li>

          <li>
            <strong>Artwork Submissions:</strong> Artists submitting their work to A. Collection affirm that they hold the necessary rights to the submitted artwork.
            The gallery reserves the right to curate and select artworks for display at Fine Art Parties, social media, this website, and other marketing materials.
          </li>

          <li>
            <strong>Copyright and Intellectual Property:</strong> All content on A. Collection, including but not limited to text, graphics, images, and software,
            is the property of A. Collection or its content suppliers and is protected by international copyright laws.
            Users agree not to reproduce, distribute, modify, or create derivative works from any materials without explicit permission.
          </li>

          <li>
            <strong>Use of Services:</strong> Users agree to use the services provided by A. Collection for lawful purposes only.
            Prohibited activities include, but are not limited to, infringing on intellectual property rights, engaging in illegal activities,
            or violating any applicable laws.
          </li>

          <li>
            <strong>Transactions:</strong> Purchases made through A. Collection are subject to our payment and shipping policies.
            We reserve the right to refuse or cancel any order for any reason.
          </li>

          <li>
            <strong>User Conduct:</strong> Users are expected to conduct themselves in a respectful and professional manner.
            Any form of harassment, abuse, or disruptive behavior towards other users or A. Collection staff will not be tolerated.
          </li>

          <li>
            <strong>Privacy Policy:</strong> Our Privacy Policy outlines how we collect, use, and protect your personal information.
            By using our services, you consent to the collection and use of your data in accordance with our Privacy Policy.
          </li>

          <li>
            <strong>Modifications:</strong> A. Collection reserves the right to modify or update these Terms of Use at any time.
            It is the responsibility of users to review these terms periodically. Continued use of the platform after changes are posted constitutes acceptance of those changes.
          </li>

          <li>
            <strong>Termination:</strong> A. Collection reserves the right to terminate or suspend user accounts or access to the platform for violations of these Terms of Use or for any other reason.
          </li>

          <li>
            <strong>Contact Information:</strong> For questions or concerns regarding these Terms of Use, please contact us at <a href="mailto:a.collectionSEA@gmail.com">a.collectionSEA@gmail.com</a>.
          </li>
        </ol>

        <p>
          Thank you for being part of A. Collection and for respecting these Terms of Use. Enjoy your exploration of art on our platform!
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
