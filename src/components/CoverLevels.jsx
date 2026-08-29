import { Check, Minus, ArrowRight, LifeBuoy, Scale, CarFront, ShieldCheck } from 'lucide-react';
import './CoverLevels.css';

/**
 * The three statutory UK motor cover levels. Wording describes what each
 * level conventionally includes — exact terms sit with the underwriter, which
 * the footnote makes clear.
 */
const LEVELS = [
  {
    name: 'Third party only',
    summary: 'The legal minimum required to drive on UK roads.',
    features: [
      { label: 'Injury to other people', included: true },
      { label: "Damage to other people's property", included: true },
      { label: 'Fire damage to your vehicle', included: false },
      { label: 'Theft of your vehicle', included: false },
      { label: 'Accidental damage to your vehicle', included: false },
    ],
  },
  {
    name: 'Third party, fire & theft',
    summary: 'Adds protection if your vehicle is stolen or catches fire.',
    features: [
      { label: 'Injury to other people', included: true },
      { label: "Damage to other people's property", included: true },
      { label: 'Fire damage to your vehicle', included: true },
      { label: 'Theft of your vehicle', included: true },
      { label: 'Accidental damage to your vehicle', included: false },
    ],
  },
  {
    name: 'Comprehensive',
    summary: 'Covers your own vehicle too, even when a claim is your fault.',
    featured: true,
    features: [
      { label: 'Injury to other people', included: true },
      { label: "Damage to other people's property", included: true },
      { label: 'Fire damage to your vehicle', included: true },
      { label: 'Theft of your vehicle', included: true },
      { label: 'Accidental damage to your vehicle', included: true },
    ],
  },
];

const EXTRAS = [
  { name: 'Breakdown cover', body: 'Roadside assistance, recovery and at-home call-outs.', Icon: LifeBuoy },
  { name: 'Motor legal protection', body: 'Helps recover costs an insurer will not pay after a claim.', Icon: Scale },
  { name: 'Courtesy vehicle', body: 'Keeps you moving while yours is being repaired.', Icon: CarFront },
  { name: 'No claims protection', body: 'Keeps your earned discount intact after a claim.', Icon: ShieldCheck },
];

const CoverLevels = () => {
  return (
    <section id="levels" className="section">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Levels of cover</p>
          <h2>Choose how far your protection goes</h2>
          <p>
            Comprehensive is not always the priciest option — on some vehicles
            it costs less than third party. We will price all three for you.
          </p>
        </div>

        <ul className="levels">
          {LEVELS.map(({ name, summary, features, featured }) => (
            <li
              key={name}
              className={`level card reveal ${featured ? 'level--featured' : ''}`}
            >
              {featured && <span className="level__flag">Most chosen</span>}

              <h3 className="level__name">{name}</h3>
              <p className="level__summary">{summary}</p>

              <ul className="level__features">
                {features.map(({ label, included }) => (
                  <li
                    key={label}
                    className={included ? 'is-included' : 'is-excluded'}
                  >
                    <span className="level__marker" aria-hidden="true">
                      {included
                        ? <Check size={13} strokeWidth={3.5} />
                        : <Minus size={13} strokeWidth={3.5} />}
                    </span>
                    <span>{label}</span>
                    <span className="visually-hidden">
                      {included ? ' — included' : ' — not included'}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className={`btn ${featured ? 'btn-primary' : 'btn-outline'} btn-block level__cta`}
              >
                Price this level
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="extras">
          <h3 className="extras__title">Optional extras worth asking about</h3>
          <ul className="extras__list">
            {EXTRAS.map(({ name, body, Icon }) => (
              <li key={name} className="extras__item reveal">
                <span className="extras__icon" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <div>
                  <h4>{name}</h4>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="cover-note">
          Cover levels follow standard UK motor insurance definitions. Exact
          limits, excesses and exclusions are set by the insurer — we will send
          the policy wording before anything is agreed.
        </p>
      </div>
    </section>
  );
};

export default CoverLevels;
