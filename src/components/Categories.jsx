import { Users, CarFront, Pizza, Package, Briefcase, Truck, HeartHandshake, CarTaxiFront, ArrowRight } from 'lucide-react';
import './Categories.css';

const CATEGORIES = [
  {
    title: 'Social only',
    body: 'Personal trips, shopping and visiting friends — no commuting.',
    Icon: Users,
  },
  {
    title: 'Social & commuting',
    body: 'Everyday driving plus travel to a single, permanent place of work.',
    Icon: CarFront,
  },
  {
    title: 'Food delivery',
    body: 'Takeaway and restaurant work, including multi-app riders and drivers.',
    Icon: Pizza,
  },
  {
    title: 'Parcel delivery',
    body: 'Multi-drop parcel rounds for couriers on owner-driver contracts.',
    Icon: Package,
  },
  {
    title: 'Business use',
    body: 'Driving between sites, client visits and work-related journeys.',
    Icon: Briefcase,
  },
  {
    title: 'Courier',
    body: 'Goods in transit and haulage for self-employed courier work.',
    Icon: Truck,
  },
  {
    title: 'Hire & reward',
    body: 'Carrying goods or passengers for payment, including private hire.',
    Icon: HeartHandshake,
  },
  {
    title: 'Taxi & private hire',
    body: 'Licensed hackney and PHV cover for drivers and small fleets.',
    Icon: CarTaxiFront,
  },
];

const Categories = () => {
  return (
    <section id="cover" className="section section--tint">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Classes of use</p>
          <h2>Cover built around how the vehicle earns its keep</h2>
          <p>
            The class of use on your policy decides whether a claim is paid.
            Tell us how you drive and we will place you on the right one.
          </p>
        </div>

        <ul className="cover-grid">
          {CATEGORIES.map(({ title, body, Icon }) => (
            <li key={title} className="reveal">
              <a href="#quote" className="cover-card card card-hover">
                <span className="cover-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="cover-card__title">{title}</h3>
                <p className="cover-card__body">{body}</p>
                <span className="cover-card__link">
                  Get a quote
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
