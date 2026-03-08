import { Users, CarFront, Pizza, Package, Briefcase, Truck, HeartHandshake, CarTaxiFront } from 'lucide-react';
import './Categories.css';

const categoryData = [
  { id: 1, title: 'Social Insurance', icon: <Users size={48} strokeWidth={1.5} /> },
  { id: 2, title: 'Social and Commuting', icon: <CarFront size={48} strokeWidth={1.5} /> },
  { id: 3, title: 'Food Delivery', icon: <Pizza size={48} strokeWidth={1.5} /> },
  { id: 4, title: 'Parcel Delivery', icon: <Package size={48} strokeWidth={1.5} /> },
  { id: 5, title: 'Business Insurance', icon: <Briefcase size={48} strokeWidth={1.5} /> },
  { id: 6, title: 'Courier Insurance', icon: <Truck size={48} strokeWidth={1.5} /> },
  { id: 7, title: 'Hire and Reward', icon: <HeartHandshake size={48} strokeWidth={1.5} /> },
  { id: 8, title: 'Taxi Insurance', icon: <CarTaxiFront size={48} strokeWidth={1.5} /> },
];

const Categories = () => {
  return (
    <section id="categories" className="categories-section">
      <div className="section-header fade-in">
        <h2>Comprehensive Coverage Options</h2>
        <p>No matter how you use your vehicle, we have the right insurance for you.</p>
      </div>

      <div className="categories-grid">
        {categoryData.map((category) => (
          <a key={category.id} href="#quote" className="category-card fade-in">
            <div className="card-icon">{category.icon}</div>
            <h3 className="card-title">{category.title}</h3>
            <div className="card-hover-indicator">➔</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
