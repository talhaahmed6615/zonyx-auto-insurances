import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <Link to="/">
              <h1>ZONYX</h1>
              <span>Auto Insurance</span>
            </Link>
          </div>
          <p className="footer-desc">
            Premium protection for the modern driver. Experience tailored coverage, confident rates, and dedicated support.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#quote">Claims</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zonyx Auto Insurance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
