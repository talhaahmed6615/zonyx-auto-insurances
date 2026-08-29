import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT } from '../siteConfig';
import './CtaBand.css';

const CtaBand = () => {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div className="cta-band__copy">
          <h2>Ready to see your price?</h2>
          <p>
            Answer seven quick questions and a specialist will come back to you
            with cover options — usually the same working day.
          </p>
        </div>

        <div className="cta-band__actions">
          <Link to="/#quote" className="btn btn-gold btn-lg">
            Start my quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <div className="cta-band__contacts">
            <a href={CONTACT.phoneHref}>
              <Phone size={16} aria-hidden="true" />
              {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref}>
              <Mail size={16} aria-hidden="true" />
              {CONTACT.email}
            </a>
            <p className="cta-band__hours">{CONTACT.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
