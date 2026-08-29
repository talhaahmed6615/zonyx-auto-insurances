import { Car, Bike, Truck, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import './Hero.css';

const QUOTE_TYPES = [
  { label: 'Get a car quote', Icon: Car },
  { label: 'Get a bike quote', Icon: Bike },
  { label: 'Get a van quote', Icon: Truck },
];

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Absolute <br /> Protection.
          </h1>
          <p className="hero-subtitle">
            Get comprehensive cover for your vehicle and enjoy exclusive premium
            rewards all year round.
          </p>

          <div className="hero-actions">
            {QUOTE_TYPES.map(({ label, Icon }) => (
              <a key={label} href="#quote" className="action-btn">
                <span className="btn-icon-left">
                  <Icon size={22} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="btn-text">{label}</span>
                <span className="btn-icon-right">
                  <ArrowRight size={22} strokeWidth={3} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>

          <div className="hero-footer-link">
            <a href="#quote">
              View my recent quotes
              <ArrowRight size={18} strokeWidth={3} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in">
          <div className="visual-card">
            <p className="visual-badge">5-Star Rated Service</p>
            <div className="visual-main">
              <Logo size={110} showText={false} className="visual-icon" />
              <div className="visual-text">
                <h2>
                  Guaranteed <br /> Coverage
                </h2>
                <p>Includes exclusive premium rewards on all new policies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
