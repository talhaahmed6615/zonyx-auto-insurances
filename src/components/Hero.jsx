import { Car, Bike, Truck, ArrowRight, Phone, Star } from 'lucide-react';
import { CONTACT } from '../siteConfig';
import './Hero.css';

const VEHICLES = [
  { value: 'Car', Icon: Car },
  { value: 'Bike', Icon: Bike },
  { value: 'Van', Icon: Truck },
];

const Hero = ({ onStartQuote }) => {
  return (
    <>
      <section className="hero">
        <img
          className="hero__bg"
          src="/images/hero-banner-1800.jpg"
          srcSet="
            /images/hero-banner-1200.jpg 1200w,
            /images/hero-banner-1800.jpg 1800w,
            /images/hero-banner-2400.jpg 2400w"
          sizes="100vw"
          width="2400"
          height="1000"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />

        <div className="hero__inner container-wide">
          <div className="hero__content">
            <p className="eyebrow">Car, bike &amp; van insurance</p>

            <h1 className="hero__title">
              We Compare. We Guide.
              <em> You Choose.</em>
            </h1>

            <p className="hero__lead">
              Tell us how you use your vehicle, and our specialist will do the
              hard work of finding and explaining suitable insurance options
              for you.
            </p>

            <div className="hero__actions">
              <a href="#quote" className="btn btn-gold btn-lg">
                Get a quote
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href={CONTACT.phoneHref} className="btn btn-ghost-light btn-lg">
                <Phone size={17} aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </div>

            <p className="hero__rating">
              <span className="hero__stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              Rated 5 out of 5
              <span className="hero__rating-tail">
                {' '}by the clients who have reviewed us
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Quote starter straddles the bottom edge of the banner */}
      <div className="quote-starter">
        <div className="container quote-starter__inner">
          <div className="quote-starter__copy">
            <p className="quote-starter__title">Start your quote</p>
            <p className="quote-starter__note">
              About three minutes. No obligation to buy.
            </p>
          </div>

          <div className="quote-starter__options">
            {VEHICLES.map(({ value, Icon }) => (
              <button
                key={value}
                type="button"
                className="quote-starter__option"
                onClick={() => onStartQuote?.(value)}
              >
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                <span>{value}</span>
              </button>
            ))}

            <a href="#quote" className="btn btn-primary quote-starter__go">
              Get my price
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
