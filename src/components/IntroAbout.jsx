import { Link } from 'react-router-dom';
import './IntroAbout.css';

const POLICY_LINKS = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-of-service', label: 'Terms of Service' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
];

/** Abstract cover illustration — gold line art on the brand navy. */
const CoverageArt = () => (
  <svg
    viewBox="0 0 600 500"
    xmlns="http://www.w3.org/2000/svg"
    className="coverage-art"
    role="img"
    aria-label="Illustration of layered insurance cover"
  >
    <defs>
      <linearGradient id="ia-gold" x1="0" y1="0" x2="600" y2="500" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#8C6318" />
        <stop offset="0.4" stopColor="#FDF6C0" />
        <stop offset="0.7" stopColor="#C08F2B" />
        <stop offset="1" stopColor="#8C6318" />
      </linearGradient>
      <radialGradient id="ia-halo" cx="0.5" cy="0.45" r="0.55">
        <stop offset="0" stopColor="#C08F2B" stopOpacity="0.22" />
        <stop offset="1" stopColor="#C08F2B" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect width="600" height="500" fill="none" />
    <circle cx="300" cy="225" r="260" fill="url(#ia-halo)" />

    {/* Concentric cover rings */}
    <circle cx="300" cy="230" r="180" fill="none" stroke="#C08F2B" strokeOpacity="0.16" strokeWidth="1.5" />
    <circle cx="300" cy="230" r="140" fill="none" stroke="#C08F2B" strokeOpacity="0.24" strokeWidth="1.5" strokeDasharray="6 10" />
    <circle cx="300" cy="230" r="100" fill="none" stroke="#C08F2B" strokeOpacity="0.35" strokeWidth="1.5" />

    {/* Central shield */}
    <g transform="translate(240, 150) scale(1)">
      <path
        d="M14 8 H106 A6 6 0 0 1 112 14 V72 C112 106 88 130 60 142 C32 130 8 106 8 72 V14 A6 6 0 0 1 14 8 Z"
        fill="#0C1330"
        stroke="url(#ia-gold)"
        strokeWidth="3"
      />
      <path d="M32 40 H88 V50 L52 88 H88 V100 H32 V90 L68 52 H32 Z" fill="url(#ia-gold)" />
    </g>

    {/* Orbiting policy chips. The lower-left one sits high enough to clear the
        "25+ years" stat card that overlaps this corner on wide screens. */}
    <g fill="#0C1330" stroke="#C08F2B" strokeOpacity="0.5" strokeWidth="1.5">
      <rect x="70" y="130" width="118" height="46" rx="10" />
      <rect x="412" y="118" width="118" height="46" rx="10" />
      <rect x="76" y="296" width="118" height="46" rx="10" />
      <rect x="398" y="322" width="118" height="46" rx="10" />
    </g>
    <g fill="#C08F2B" fillOpacity="0.55">
      <rect x="86" y="144" width="52" height="6" rx="3" />
      <rect x="86" y="158" width="76" height="5" rx="2.5" />
      <rect x="428" y="132" width="52" height="6" rx="3" />
      <rect x="428" y="146" width="76" height="5" rx="2.5" />
      <rect x="92" y="310" width="52" height="6" rx="3" />
      <rect x="92" y="324" width="76" height="5" rx="2.5" />
      <rect x="414" y="336" width="52" height="6" rx="3" />
      <rect x="414" y="350" width="76" height="5" rx="2.5" />
    </g>

    {/* Connectors */}
    <g stroke="#C08F2B" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="4 8" fill="none">
      <path d="M188 153 C 220 165, 232 180, 244 196" />
      <path d="M412 141 C 380 156, 368 172, 356 190" />
      <path d="M194 318 C 220 312, 238 300, 248 288" />
      <path d="M398 345 C 372 334, 358 318, 350 300" />
    </g>

    {/* Base plate */}
    <ellipse cx="300" cy="432" rx="182" ry="26" fill="none" stroke="#C08F2B" strokeOpacity="0.2" strokeWidth="1.5" />
    <ellipse cx="300" cy="432" rx="120" ry="17" fill="none" stroke="#C08F2B" strokeOpacity="0.12" strokeWidth="1.5" />
  </svg>
);

const IntroAbout = () => {
  return (
    <section className="intro-about-section">
      <div className="intro-about-container">
        <div className="about-content fade-in">
          <p className="about-label">Introduction About Us</p>
          <h2 className="about-headline">
            At Zonyx, we deliver premium insurance solutions with zero hassle and
            complete peace of mind.
          </h2>
          <p className="about-description">
            Backed by decades of industry expertise, we combine cutting-edge
            technology with personalized service to protect what matters most to you.
          </p>

          <div className="about-policies">
            <p className="policies-text">Learn more about our commitment to you:</p>
            <ul className="policies-links">
              {POLICY_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="policy-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-visual fade-in">
          <div className="about-image-wrapper">
            <div className="gradient-overlay" aria-hidden="true"></div>
            <CoverageArt />
          </div>

          <div className="about-stats-box">
            <p className="stats-number">25+</p>
            <p className="stats-label">Years of Industry Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroAbout;
