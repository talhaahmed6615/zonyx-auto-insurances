import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <figure className="quote reveal">
          <div className="quote__stars" role="img" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            ))}
          </div>

          <blockquote className="quote__text">
            After enquiring about my first insurance product with the team I have
            gone on to move more products over. From start to finish, every time,
            the team is professional and knowledgeable. Thank you team for making
            something so complicated, so simple.
          </blockquote>

          <figcaption className="quote__author">
            <span className="quote__name">Mohammed</span>
            <span className="quote__company">Prestige Vehicle Rentals</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
