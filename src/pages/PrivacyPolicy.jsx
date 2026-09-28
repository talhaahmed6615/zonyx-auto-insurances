import { Helmet } from 'react-helmet-async';
import PageHero from './PageHero';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zonyx Auto Insurance</title>
        <meta name="description" content="How Zonyx Auto Insurance collects, uses and protects your personal data when you request a quote or contact us." />
      </Helmet>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="How Zonyx collects, uses and protects the personal information you share with us."
      />

      <div className="page-body">
        <div className="container">
          <div className="prose">
          <h2>Data Protection & Privacy</h2>
          <p>At Zonyx Auto Insurance, we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our privacy practices, please contact us at info@zonyxautoinsurance.com.</p>
          
          <h3>Information We Collect</h3>
          <p>We collect information you provide directly, such as when you submit a quote request or contact our support team. This includes:</p>
          <ul>
            <li>Personal identification information (name, email, phone number)</li>
            <li>Vehicle information (make, model, registration)</li>
            <li>Driving history and insurance details</li>
            <li>Payment information</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>Your information is used to:</p>
          <ul>
            <li>Process your insurance quotes and policies</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Improve our services and website functionality</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>

          <h3>Data Security</h3>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted and stored securely.</p>

          <h3>Your Rights</h3>
          <p>You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact our privacy team at info@zonyxautoinsurance.com.</p>

          <h3>Contact Us</h3>
          <p><strong>Email:</strong> info@zonyxautoinsurance.com</p>
          <p><strong>Phone:</strong> +44 7932 578446</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
