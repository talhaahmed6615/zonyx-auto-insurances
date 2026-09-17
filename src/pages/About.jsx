import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from './PageHero';
import WorkProcess from '../components/WorkProcess';
import TrustBar from '../components/TrustBar';
import CtaBand from '../components/CtaBand';

const VALUES = [
  {
    title: 'Get the class of use right',
    body: 'The wrong class of use is the quickest way to have a claim declined. We confirm it in writing before cover starts.',
  },
  {
    title: 'Explain before you buy',
    body: 'Excesses, exclusions and endorsements get talked through in plain English, not buried in a PDF you never open.',
  },
  {
    title: 'Stay reachable',
    body: 'The person who arranged your policy is the person who answers when something changes or goes wrong.',
  },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About us"
      title="Motor insurance specialists, not a comparison table"
      intro="Zonyx arranges car, bike and van cover for UK drivers, including the working drivers most comparison sites struggle to price properly."
      image="/images/road-winding-1900.jpg"
    />

    <div className="page-body">
      <div className="container about-split">
        <div className="prose">
          <h2>What we do</h2>
          <p>
            We are a motor insurance broker. That means we sit between you and
            the insurers: you tell us about the vehicle and how you use it, and
            we find cover that actually matches, at a level you are happy with.
          </p>
          <p>
            Most of our work is with drivers whose circumstances do not fit a
            standard form, couriers and delivery drivers, private hire drivers,
            people on provisional or overseas licences, and drivers with claims
            history. Those cases need a conversation, not a dropdown.
          </p>

          <h2>How we are paid</h2>
          <p>
            We are paid commission by the insurer when a policy is placed, and in
            some cases a broker fee, which is always shown to you before you
            commit. You will never be charged for a quote or for advice.
          </p>
        </div>

        <div>
          <h2>How we work</h2>
          <div className="about-values" style={{ marginTop: '1.25rem' }}>
            {VALUES.map(({ title, body }) => (
              <div className="value-item" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className="page-actions">
            <Link to="/#quote" className="btn btn-primary">
              Start a quote <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-outline">Talk to us</Link>
          </div>
        </div>
      </div>
    </div>

    <TrustBar />
    <WorkProcess />
    <CtaBand />
  </>
);

export default About;
