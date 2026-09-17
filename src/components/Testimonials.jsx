import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const REVIEWS = [
  {
    text: 'After enquiring about my first insurance product with the team I have gone on to move more products over. From start to finish, every time, the team is professional and knowledgeable. Thank you team for making something so complicated, so simple.',
    name: 'Mohammed',
    company: 'Prestige Vehicle Rentals',
    rating: 5,
  },
  {
    text: 'I was struggling to find courier insurance that actually covered multi-drop work. Zonyx found me a policy within a day and walked me through every detail. The price was fair and the cover was exactly what I needed.',
    name: 'James T.',
    company: 'Self-employed courier',
    rating: 5,
  },
  {
    text: 'Switched from a comparison site after my claim got refused for wrong class of use. Zonyx made sure everything was declared properly this time. Renewed with them twice now and the service has been consistent each year.',
    name: 'Priya S.',
    company: 'Private hire driver',
    rating: 5,
  },
  {
    text: 'Needed van insurance for food delivery and kept getting turned down online. One phone call with Zonyx and I had three options by the end of the afternoon. They explained the differences clearly so I could pick the right one.',
    name: 'Daniel K.',
    company: 'Delivery driver',
    rating: 5,
  },
  {
    text: 'I was on a provisional licence and had no idea where to start with insurance. The team was patient, answered all my questions, and found me a solid policy at a reasonable price. Genuinely could not have done it without them.',
    name: 'Aisha M.',
    company: 'New driver',
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const total = REVIEWS.length;

  const goTo = useCallback(
    (index) => setActive(((index % total) + total) % total),
    [total]
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const id = setInterval(() => goTo(active + 1), 6000);
    return () => clearInterval(id);
  }, [active, goTo]);

  const review = REVIEWS[active];

  return (
    <section className="section section--tint">
      <div className="container">
        <div className="testimonials-head reveal">
          <p className="eyebrow">What our clients say</p>
          <h2>Trusted by drivers across the UK</h2>
        </div>

        <figure className="pullquote reveal" key={active}>
          <Quote className="pullquote__mark" size={52} aria-hidden="true" />

          <div className="pullquote__stars" role="img" aria-label={`Rated ${review.rating} out of 5`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={17}
                fill={i < review.rating ? 'currentColor' : 'none'}
                strokeWidth={i < review.rating ? 0 : 1.5}
                aria-hidden="true"
              />
            ))}
          </div>

          <blockquote className="pullquote__text">
            {review.text}
          </blockquote>

          <figcaption className="pullquote__author">
            <span className="pullquote__rule" aria-hidden="true" />
            <span className="pullquote__who">
              <span className="pullquote__name">{review.name}</span>
              <span className="pullquote__company">{review.company}</span>
            </span>
          </figcaption>
        </figure>

        <div className="testimonials-nav">
          <button
            type="button"
            className="testimonials-nav__btn"
            onClick={() => goTo(active - 1)}
            aria-label="Previous review"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <div className="testimonials-nav__dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials-nav__dot ${i === active ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials-nav__btn"
            onClick={() => goTo(active + 1)}
            aria-label="Next review"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
