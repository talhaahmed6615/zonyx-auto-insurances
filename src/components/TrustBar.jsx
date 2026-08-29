import { TRUST_STATS } from '../siteConfig';
import './TrustBar.css';

const TrustBar = () => {
  if (!TRUST_STATS.length) return null;

  return (
    <section className="trust-bar" aria-label="Zonyx at a glance">
      <div className="container">
        <ul className="trust-bar__list">
          {TRUST_STATS.map(({ value, label }) => (
            <li className="trust-bar__item" key={label}>
              <span className="trust-bar__value">{value}</span>
              <span className="trust-bar__label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
