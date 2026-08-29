import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT } from '../siteConfig';
import './CtaBand.css';

const CtaBand = () => {
  return (
    <section className="cta-band">
      <img
        className="cta-band__bg"
        src="/images/road-winding-1900.jpg"
        srcSet="/images/road-winding-1200.jpg 1200w, /images/road-winding-1900.jpg 1900w"
        sizes="100vw"
        width="1900"
        height="780"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="container cta-band__inner">
        <div className="cta-band__copy">
          <h2>Ready to see your price?</h2>
          <p>
            Answer seven quick questions and a specialist will come back to you
            with cover options — usually the same working day.
          </p>

          <div className="cta-band__actions">
            <Link to="/#quote" className="btn btn-gold btn-lg">
              Start my quote
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-ghost-light btn-lg">
              Talk to a specialist
            </Link>
          </div>
        </div>

        <div className="cta-band__contacts">
          <a href={CONTACT.phoneHref}>
            <Phone size={17} aria-hidden="true" />
            <span>
              <span className="cta-band__label">Call us</span>
              <span className="cta-band__value">{CONTACT.phone}</span>
            </span>
          </a>
          <a href={CONTACT.emailHref}>
            <Mail size={17} aria-hidden="true" />
            <span>
              <span className="cta-band__label">Email us</span>
              <span className="cta-band__value">{CONTACT.email}</span>
            </span>
          </a>
          <p className="cta-band__hours">{CONTACT.hours}</p>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
