import { Car, Bike, Truck, ArrowRight, Check } from 'lucide-react';
import './Hero.css';

const VEHICLES = [
  { value: 'Car', Icon: Car },
  { value: 'Bike', Icon: Bike },
  { value: 'Van', Icon: Truck },
];

const POINTS = [
  'Cover for social, commuting, courier and hire & reward',
  'Comprehensive, third party fire & theft, or third party',
  'Named specialist looks after your policy end to end',
];

const Hero = ({ onStartQuote }) => {
  return (
    <section className="hero">
      <div className="hero__inner container-wide">
        <div className="hero__content">
          <p className="eyebrow">Car, bike &amp; van insurance</p>

          <h1 className="hero__title">
            Insurance that fits how you actually drive.
          </h1>

          <p className="hero__lead">
            Whether the vehicle is for the school run, the daily commute or a
            full day of deliveries, we match you to cover that reflects it —
            and a specialist who picks up the phone.
          </p>

          <ul className="hero__points">
            {POINTS.map((point) => (
              <li key={point}>
                <span className="hero__tick" aria-hidden="true">
                  <Check size={13} strokeWidth={3.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__panel">
          <div className="quote-starter">
            <h2 className="quote-starter__title">Start your quote</h2>
            <p className="quote-starter__sub">What are we covering?</p>

            <div className="quote-starter__options">
              {VEHICLES.map(({ value, Icon }) => (
                <button
                  key={value}
                  type="button"
                  className="quote-starter__option"
                  onClick={() => onStartQuote?.(value)}
                >
                  <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                  <span>{value}</span>
                </button>
              ))}
            </div>

            <a href="#quote" className="btn btn-primary btn-lg btn-block quote-starter__cta">
              Get my price
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <p className="quote-starter__note">
              Takes about 3 minutes. No obligation to buy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
