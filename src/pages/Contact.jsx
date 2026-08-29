import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import PageHero from './PageHero';
import { CONTACT } from '../siteConfig';

const Contact = () => (
  <>
    <PageHero
      eyebrow="Get in touch"
      title="Contact us"
      intro="Call, email or start a quote online. A specialist will pick it up and come back to you the same working day where possible."
      image="/images/contact-bg-1800.jpg"
    />

    <div className="page-body">
      <div className="container">
        <ul className="contact-grid">
          <li className="contact-card">
            <span className="contact-card__icon"><Phone size={18} strokeWidth={1.8} aria-hidden="true" /></span>
            <span>
              <span className="contact-card__label">Phone</span>
              <a className="contact-card__value" href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </span>
          </li>
          <li className="contact-card">
            <span className="contact-card__icon"><Mail size={18} strokeWidth={1.8} aria-hidden="true" /></span>
            <span>
              <span className="contact-card__label">Email</span>
              <a className="contact-card__value" href={CONTACT.emailHref}>{CONTACT.email}</a>
            </span>
          </li>
          <li className="contact-card">
            <span className="contact-card__icon"><MapPin size={18} strokeWidth={1.8} aria-hidden="true" /></span>
            <span>
              <span className="contact-card__label">Office</span>
              <span className="contact-card__value">{CONTACT.office}</span>
            </span>
          </li>
          <li className="contact-card">
            <span className="contact-card__icon"><Clock size={18} strokeWidth={1.8} aria-hidden="true" /></span>
            <span>
              <span className="contact-card__label">Opening hours</span>
              <span className="contact-card__value">{CONTACT.hours}</span>
            </span>
          </li>
        </ul>

        <div className="prose">
          <h2>What to have ready</h2>
          <p>
            Having these to hand makes the call much quicker, though we can start
            without them:
          </p>
          <ul>
            <li>The vehicle registration, or the make, model and year</li>
            <li>Your driving licence number and how long you have held it</li>
            <li>Details of any claims or convictions in the last five years</li>
            <li>Your current renewal notice, if you have one</li>
          </ul>

          <h2>Making a claim</h2>
          <p>
            If you need to claim, call us on{' '}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> and we will point you
            to the right claims line and stay involved until it is settled.
          </p>
        </div>

        <div className="page-actions">
          <Link to="/#quote" className="btn btn-primary">
            Start a quote <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link to="/cover" className="btn btn-outline">See cover types</Link>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
