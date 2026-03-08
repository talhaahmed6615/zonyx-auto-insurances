import { Car, Bike, Truck, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Absolute <br/> Protection.
          </h1>
          <p className="hero-subtitle">
            Get comprehensive cover for your vehicle and enjoy exclusive premium rewards all year round.
          </p>
          
          <div className="hero-actions fade-in">
            <a href="#quote" className="action-btn">
              <span className="btn-icon-left"><Car size={24} strokeWidth={2.5} /></span>
              <span className="btn-text">Get a car quote</span>
              <span className="btn-icon-right"><ArrowRight size={24} strokeWidth={3} /></span>
            </a>
            <a href="#quote" className="action-btn">
              <span className="btn-icon-left"><Bike size={24} strokeWidth={2.5} /></span>
              <span className="btn-text">Get a bike quote</span>
              <span className="btn-icon-right"><ArrowRight size={24} strokeWidth={3} /></span>
            </a>
            <a href="#quote" className="action-btn">
              <span className="btn-icon-left"><Truck size={24} strokeWidth={2.5} /></span>
              <span className="btn-text">Get a van quote</span>
              <span className="btn-icon-right"><ArrowRight size={24} strokeWidth={3} /></span>
            </a>
          </div>
          <div className="hero-footer-link">
            <a href="#quote">View my recent quotes <ArrowRight size={20} strokeWidth={3} /></a>
          </div>
        </div>
        
        <div className="hero-visual fade-in">
          <div className="visual-card">
            <div className="visual-badge">
              <span>5-Star Rated Service</span>
            </div>
            <div className="visual-main">
              <ShieldCheck size={100} className="visual-icon" strokeWidth={1} />
              <div className="visual-text">
                <h3>Guaranteed <br/> Coverage</h3>
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
