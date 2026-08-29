import './Page.css';

/** Navy banner used at the top of every non-home page. */
const PageHero = ({ eyebrow, title, intro }) => (
  <section className="page-hero">
    <div className="container">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </div>
  </section>
);

export default PageHero;
