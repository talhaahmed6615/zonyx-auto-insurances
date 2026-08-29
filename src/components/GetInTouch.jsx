import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { CONTACT } from '../siteConfig';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="get-in-touch-section">
      <div className="get-in-touch-container fade-in">
        <h2 className="git-title">Speak to a specialist</h2>
        <p className="git-subtitle">
          Our team is on hand to talk through cover, claims and renewals.
        </p>

        <Link to="/contact" className="get-in-touch-btn">
          <span>Get in Touch</span>
        </Link>

        <div className="git-channels">
          {/* Previously decorative only — these are now real, tappable links */}
          <a className="git-channel" href={CONTACT.phoneHref}>
            <span className="git-channel__icon">
              <Phone size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="git-channel__body">
              <span className="git-channel__label">Call us</span>
              <span className="git-channel__value">{CONTACT.phone}</span>
            </span>
          </a>

          <a className="git-channel" href={CONTACT.emailHref}>
            <span className="git-channel__icon">
              <Mail size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="git-channel__body">
              <span className="git-channel__label">Email us</span>
              <span className="git-channel__value">{CONTACT.email}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
