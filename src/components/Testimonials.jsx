import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section section--tint">
      <div className="container">
        <figure className="pullquote reveal">
          <Quote className="pullquote__mark" size={52} aria-hidden="true" />

          <div className="pullquote__stars" role="img" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={17} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            ))}
          </div>

          <blockquote className="pullquote__text">
            After enquiring about my first insurance product with the team I have
            gone on to move more products over. From start to finish, every time,
            the team is professional and knowledgeable. Thank you team for making
            something so complicated, so simple.
          </blockquote>

          <figcaption className="pullquote__author">
            <span className="pullquote__rule" aria-hidden="true" />
            <span className="pullquote__who">
              <span className="pullquote__name">Mohammed</span>
              <span className="pullquote__company">Prestige Vehicle Rentals</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
