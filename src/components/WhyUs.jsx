import { PhoneCall, SlidersHorizontal, FileSearch, Clock } from 'lucide-react';
import './WhyUs.css';

const REASONS = [
  {
    Icon: PhoneCall,
    title: 'A person, not a portal',
    body: 'One named specialist handles your quote, your renewal and your claim, so you never re-explain your situation.',
  },
  {
    Icon: SlidersHorizontal,
    title: 'The right class of use',
    body: 'Most declined claims come down to the wrong class of use. We get that right before the policy is issued.',
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
    <section className="section section--tint">
      <div className="container">
        <div className="why__layout">
          <div className="why__intro reveal">
            <p className="eyebrow">Why Zonyx</p>
            <h2>Brokers who read the small print so you do not have to</h2>
            <p className="why__lead">
              Insurance goes wrong at the edges — the class of use, the excess,
              the modification you forgot to declare. That is the part we take
              seriously.
            </p>
            <a href="#quote" className="link-arrow why__link">
              Start a quote
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="why__grid">
            {REASONS.map(({ Icon, title, body }) => (
              <li key={title} className="why__item reveal">
                <span className="why__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
