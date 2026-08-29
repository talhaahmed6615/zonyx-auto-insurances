import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header fade-in">
          <p className="testimonials-label">Client Testimonial</p>
          <h2 className="testimonials-headline">What Our Clients Say About Our Company</h2>
          <div className="testimonials-divider" aria-hidden="true"></div>
        </div>

        <div className="testimonials-content">
          <figure className="testimonial-card fade-in">
            <div className="testimonial-stars" role="img" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={22} fill="currentColor" strokeWidth={0} aria-hidden="true" />
              ))}
            </div>

            <Quote className="testimonial-quote" size={56} aria-hidden="true" />

            <blockquote className="testimonial-text">
              After enquiring about my first insurance product with the team I have
              gone on to move more products over. From start to finish, every time,
              the team is professional and knowledgeable. Thank you team for making
              something so complicated, so simple!
            </blockquote>

            <figcaption className="testimonial-author">
              <span className="author-name">Mohammed</span>
              <span className="author-company">Prestige Vehicle Rentals</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
