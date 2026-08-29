import { UserRound, FileText, Handshake } from 'lucide-react';
import './WorkProcess.css';

const STEPS = [
  {
    number: '01',
    title: 'Connect with an Agent',
    description:
      'Get in touch with our experienced insurance specialists who will guide you through the entire process.',
    Icon: UserRound,
  },
  {
    number: '02',
    title: 'Select Best Policy',
    description:
      'Browse and compare our comprehensive insurance packages tailored to your specific needs.',
    Icon: FileText,
  },
  {
    number: '03',
    title: 'Review and Purchase',
    description:
      'Review your chosen policy details and complete your purchase with confidence.',
    Icon: Handshake,
  },
];

const WorkProcess = () => {
  return (
    <section className="wp-section">
      <div className="wp-container">
        <p className="wp-label fade-in">Work Process</p>
        <h2 className="wp-title fade-in">
          Your Insurance, Your Way: The Simple Steps to Coverage
        </h2>
        <div className="wp-divider fade-in" aria-hidden="true"></div>

        <ol className="wp-steps">
          {STEPS.map(({ number, title, description, Icon }) => (
            <li key={number} className="wp-step fade-in">
              <span className="wp-step__badge" aria-hidden="true">{number}</span>
              <span className="wp-step__icon">
                <Icon size={44} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3 className="wp-step__title">
                <span className="visually-hidden">Step {number}: </span>
                {title}
              </h3>
              <p className="wp-step__desc">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorkProcess;
