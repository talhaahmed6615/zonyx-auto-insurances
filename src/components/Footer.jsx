import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CONTACT, REGULATORY } from '../siteConfig';
import './Footer.css';

const LINK_COLUMNS = [
  {
    heading: 'Insurance',
    links: [
      { to: '/cover', label: 'Cover types' },
      { to: '/#levels', label: 'Levels of cover' },
      { to: '/#quote', label: 'Get a quote' },
      { to: '/#faq', label: 'Common questions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About us' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { to: '/privacy-policy', label: 'Privacy policy' },
      { to: '/terms-of-service', label: 'Terms of service' },
      { to: '/cookie-policy', label: 'Cookie policy' },
    ],
  },
];

const Footer = () => {
  const { fcaNumber, legalEntity, companyNumber } = REGULATORY;
  const hasRegulatory = Boolean(fcaNumber && legalEntity);

  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Link to="/" aria-label="Zonyx Auto Insurance — home">
            <Logo size={46} onDark />
          </Link>
          <p className="site-footer__blurb">
            Motor insurance specialists for UK drivers, from social use and
            commuting through to courier work and private hire.
          </p>
          <ul className="site-footer__contact">
            <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a href={CONTACT.emailHref}>{CONTACT.email}</a></li>
            <li className="site-footer__hours">{CONTACT.hours}</li>
          </ul>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {LINK_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h2>{heading}</h2>
              <ul>
                {links.map(({ to, label }) => (
                  <li key={to}><Link to={to}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container site-footer__bottom">
        {/* Rendered only once real details are set in siteConfig — a made-up
            FCA number on a live insurance site is not a small problem. */}
        {hasRegulatory && (
          <p className="site-footer__regulatory">
            {legalEntity} is authorised and regulated by the Financial Conduct
            Authority, firm reference number {fcaNumber}.
            {companyNumber && ` Registered in England and Wales, company number ${companyNumber}.`}
          </p>
        )}

        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} Zonyx Auto Insurance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
