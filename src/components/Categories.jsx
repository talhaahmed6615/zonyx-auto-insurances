import { Users, CarFront, Pizza, Package, Briefcase, Truck, HeartHandshake, CarTaxiFront } from 'lucide-react';
import './Categories.css';

const categoryData = [
  { id: 1, title: 'Social Insurance', Icon: Users },
  { id: 2, title: 'Social and Commuting', Icon: CarFront },
  { id: 3, title: 'Food Delivery', Icon: Pizza },
  { id: 4, title: 'Parcel Delivery', Icon: Package },
  { id: 5, title: 'Business Insurance', Icon: Briefcase },
  { id: 6, title: 'Courier Insurance', Icon: Truck },
  { id: 7, title: 'Hire and Reward', Icon: HeartHandshake },
  { id: 8, title: 'Taxi Insurance', Icon: CarTaxiFront },
];

const Categories = () => {
  return (
    <section id="categories" className="categories-section">
      <div className="section-header fade-in">
        <h2>Professional Auto Insurance With Comprehensive Coverage</h2>
        <p>No matter how you use your vehicle, we have the right insurance for you.</p>
      </div>

      <div className="categories-grid">
        {categoryData.map(({ id, title, Icon }) => (
          <a key={id} href="#quote" className="category-card fade-in">
            <span className="card-icon">
              <Icon size={40} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="card-title">{title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
