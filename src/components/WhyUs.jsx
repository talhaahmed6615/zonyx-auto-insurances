import { PhoneCall, SlidersHorizontal, FileSearch, Clock } from 'lucide-react';
import './WhyUs.css';

const REASONS = [
  {
    Icon: SlidersHorizontal,
    title: 'The right class of use',
    body: 'Most declined claims come down to the wrong class of use. We get that right before the policy is issued.',
  },
  {
    Icon: PhoneCall,
    title: 'A person, not a portal',
    body: 'One named specialist handles your quote, your renewal and your claim, so you never re-explain your situation.',
  },
  {
    Icon: FileSearch,
    title: 'Plain policy wording',
    body: 'We send the wording and walk you through the excesses and exclusions before you commit to anything.',
  },
  {
    Icon: Clock,
    title: 'Cover that keeps up',
    body: 'Changed job, added a driver, started delivering? Tell us and we will adjust the policy the same day.',
  },
];

const WhyUs = () => {
  return (
    <section className="section why">
      <div className="container why__layout">
        <div className="why__media reveal">
          <img
            src="/images/broker-keys-1200.jpg"
            srcSet="/images/broker-keys-800.jpg 800w, /images/broker-keys-1200.jpg 1200w"
            sizes="(max-width: 900px) 100vw, 44vw"
            width="1200"
            height="1500"
            alt="One person handing a set of car keys to another"
            loading="lazy"
            decoding="async"
          />
          <div className="why__stat">
            <span className="why__stat-value">8</span>
            <span className="why__stat-label">
              classes of use arranged, from social right through to hire &amp; reward
            </span>
          </div>
        </div>

        <div className="why__content">
          <div className="reveal">
            <p className="eyebrow">Why Zonyx</p>
            <h2>Brokers who read the small print so you do not have to</h2>
            <p className="why__lead">
              Insurance goes wrong at the edges, the class of use, the excess,
              the modification nobody declared. That is the part we take
              seriously.
            </p>
          </div>

          <ul className="why__grid">
            {REASONS.map(({ Icon, title, body }) => (
              <li key={title} className="why__item reveal">
                <span className="why__icon" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
