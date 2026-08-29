import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { CONTACT } from '../siteConfig';
import './Footer.css';

const LINK_COLUMNS = [
  {
    heading: 'Company',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/#quote', label: 'Get a Quote' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { to: '/contact', label: 'Contact Us' },
      { to: '/#categories', label: 'Coverage Types' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms-of-service', label: 'Terms of Service' },
      { to: '/cookie-policy', label: 'Cookie Policy' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Zonyx Auto Insurance — home">
            <Logo size={36} />
          </Link>
          <p className="footer-desc">
            Premium protection for the modern driver. Experience tailored coverage,
            confident rates, and dedicated support.
          </p>
          <ul className="footer-contact">
            <li>
              <a href={CONTACT.phoneHref}>
                <Phone size={16} aria-hidden="true" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref}>
                <Mail size={16} aria-hidden="true" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {LINK_COLUMNS.map(({ heading, links }) => (
            <div className="link-column" key={heading}>
              <h2>{heading}</h2>
              <ul>
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zonyx Auto Insurance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
