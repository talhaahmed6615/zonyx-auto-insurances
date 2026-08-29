import { Link } from 'react-router-dom';
import { UserRound, FileText, Handshake, Check, ArrowRight } from 'lucide-react';
import './About.css';

const HIGHLIGHTS = [
  { number: '25+', text: 'Years of Excellence' },
  { number: '5M+', text: 'Trusted Drivers' },
  { number: '24/7', text: 'Expert Support' },
];

const BENEFITS = [
  { title: 'Premium Protection', body: 'Coverage tailored to your exact lifestyle and needs' },
  { title: '24/7 Support', body: 'Dedicated agents ready to assist you anytime' },
  { title: 'Smart Claims', body: 'Lightning-fast resolutions with advanced technology' },
];

const STEPS = [
  {
    number: '01',
    title: 'Connect with an Agent',
    body: 'Get personalized guidance from our expert insurance specialists who understand your unique needs',
    Icon: UserRound,
  },
  {
    number: '02',
    title: 'Select Best Policy',
    body: 'Choose from our comprehensive range of coverage options designed for every driver',
    Icon: FileText,
  },
  {
    number: '03',
    title: 'Review and Purchase',
    body: 'Complete your coverage with confidence and instant peace of mind',
    Icon: Handshake,
  },
];

const About = () => {
  return (
    <div className="page-container fade-in visible">
      <div className="page-header">
        <h1>About <span className="gold-text">Zonyx</span></h1>
        <p>Premium auto insurance backed by decades of trust and cutting-edge technology.</p>
      </div>

      <div className="page-content">
        <div className="about-hero">
          <div className="hero-left">
            <h2>Our Mission</h2>
            <p>
              At Zonyx Auto Insurance, we believe that every vehicle and every driver
              deserves uncompromising protection. We blend cutting-edge technology with
              industry-leading coverage to deliver peace of mind on every journey.
            </p>
            <ul className="mission-highlights">
              {HIGHLIGHTS.map(({ number, text }) => (
                <li className="highlight-item" key={text}>
                  <span className="highlight-number">{number}</span>
                  <span className="highlight-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-divider" aria-hidden="true"></div>

          <div className="hero-right">
            <h2>Why Choose Us?</h2>
            <ul className="benefits-list">
              {BENEFITS.map(({ title, body }) => (
                <li className="benefit-item" key={title}>
                  <span className="benefit-icon" aria-hidden="true">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span>
                    <span className="benefit-title">{title}</span>
                    <span className="benefit-body">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* about- prefixed so these rules cannot leak onto the home page's
            WorkProcess section, which used the same generic class names. */}
        <div className="about-process">
          <div className="about-process__header">
            <h2>Our Work Process</h2>
            <p className="about-process__subtitle">
              Three Simple Steps to Your Complete Coverage
            </p>
          </div>

          <ol className="about-process__steps">
            {STEPS.map(({ number, title, body, Icon }) => (
              <li className="about-step" key={number}>
                <span className="about-step__icon">
                  <Icon size={40} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="about-step__number" aria-hidden="true">{number}</span>
                <h3>
                  <span className="visually-hidden">Step {number}: </span>
                  {title}
                </h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>

          <div className="about-cta">
            <Link to="/#quote" className="btn btn-primary">
              Get your quote <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Talk to an agent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
