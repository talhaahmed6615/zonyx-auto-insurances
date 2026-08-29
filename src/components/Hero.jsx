import { Car, Bike, Truck, ArrowRight, Star } from 'lucide-react';
import './Hero.css';

const VEHICLES = [
  { value: 'Car', Icon: Car },
  { value: 'Bike', Icon: Bike },
  { value: 'Van', Icon: Truck },
];

const Hero = ({ onStartQuote }) => {
  return (
    <section className="hero">
      <div className="hero__inner container-wide">
        <div className="hero__content">
          <p className="eyebrow">Car, bike &amp; van insurance</p>

          <h1 className="hero__title">
            Cover that understands
            <em> how you actually drive</em>
          </h1>

          <p className="hero__lead">
            School run, daily commute or a full day of deliveries — we match the
            policy to the way the vehicle is really used, and give you a
            specialist who picks up the phone.
          </p>

          <div className="hero__starter">
            <p className="hero__starter-label">What are we covering?</p>

            <div className="hero__vehicles">
              {VEHICLES.map(({ value, Icon }) => (
                <button
                  key={value}
                  type="button"
                  className="hero__vehicle"
                  onClick={() => onStartQuote?.(value)}
                >
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  <span>{value}</span>
                </button>
              ))}

              <a href="#quote" className="btn btn-gold hero__go">
                Get my price
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <p className="hero__starter-note">
              About three minutes. No obligation to buy.
            </p>
          </div>
        </div>

        <figure className="hero__media">
          <img
            src="/images/hero-drive-1400.jpg"
            srcSet="/images/hero-drive-900.jpg 900w, /images/hero-drive-1400.jpg 1400w"
            sizes="(max-width: 980px) 100vw, 48vw"
            width="1400"
            height="1750"
            alt="A car on a coastal road at golden hour"
            fetchPriority="high"
            decoding="async"
          />

          <figcaption className="hero__badge">
            <span className="hero__badge-stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="hero__badge-text">
              Rated 5 out of 5 by the clients who have reviewed us
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
