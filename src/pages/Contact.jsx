import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT } from '../siteConfig';
import './About.css';

const Contact = () => {
  return (
    <div className="page-container fade-in visible">
      <div className="page-header">
        <h1>Contact <span className="gold-text">Us</span></h1>
        <p>We are here to help you 24/7. Reach out to our dedicated support team.</p>
      </div>

      <div className="page-content">
        <div className="about-text">
          <h2>Get in Touch</h2>
          <p>
            Whether you need a new quote, want to update your policy, or need to file
            a claim, our team is standing by.
          </p>

          <ul className="contact-cards">
            <li className="contact-card">
              <span className="contact-card__icon">
                <Phone size={19} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className="contact-card__label">Phone</span>
                <a className="contact-card__value" href={CONTACT.phoneHref}>
                  {CONTACT.phone}
                </a>
              </span>
            </li>

            <li className="contact-card">
              <span className="contact-card__icon">
                <Mail size={19} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className="contact-card__label">Email</span>
                <a className="contact-card__value" href={CONTACT.emailHref}>
                  {CONTACT.email}
                </a>
              </span>
            </li>

            <li className="contact-card">
              <span className="contact-card__icon">
                <MapPin size={19} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className="contact-card__label">Office</span>
                <span className="contact-card__value">{CONTACT.office}</span>
              </span>
            </li>
          </ul>

          <div className="notfound-actions">
            <Link to="/#quote" className="btn btn-primary">
              Start a quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
