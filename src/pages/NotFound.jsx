import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from './PageHero';

const NotFound = () => (
  <>
    <PageHero
      eyebrow="Error 404"
      title="We could not find that page"
      intro="The link may be out of date, or the address may have a typo in it."
    />

    <div className="page-body">
      <div className="container">
        <div className="prose">
          <p>Here are the pages people usually want:</p>
          <ul>
            <li><Link to="/#quote">Get a quote</Link></li>
            <li><Link to="/cover">Cover types and levels</Link></li>
            <li><Link to="/#faq">Common questions</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div className="page-actions">
          <Link to="/" className="btn btn-primary">
            Back to home <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default NotFound;
