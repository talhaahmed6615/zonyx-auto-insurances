import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowRight } from 'lucide-react';
import './About.css';

const NotFound = () => {
  return (
    <div className="page-container fade-in visible">
      <div className="page-header">
        <h1>Page <span className="gold-text">Not Found</span></h1>
        <p>The page you were looking for has moved or no longer exists.</p>
      </div>
      <div className="page-content">
        <div className="about-text notfound-body">
          <p>
            Check the address, or head back to the homepage to get a quote for your
            car, bike or van.
          </p>
          <div className="notfound-actions">
            <Link to="/" className="btn btn-primary">
              <HomeIcon size={20} aria-hidden="true" /> Back to home
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact us <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
