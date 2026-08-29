import './Page.css';

/**
 * Navy banner used at the top of every non-home page.
 *
 *  - `image` optional photograph behind the copy
 *  - `blur`  softens that photograph so the heading stays the focus
 */
const PageHero = ({ eyebrow, title, intro, image, imageAlt = '', blur = false }) => (
  <section
    className={`page-hero ${image ? 'page-hero--photo' : ''} ${blur ? 'page-hero--blur' : ''}`}
  >
    {image && (
      <img
        className="page-hero__bg"
        src={image}
        alt={imageAlt}
        aria-hidden={imageAlt ? undefined : 'true'}
        loading="eager"
        decoding="async"
      />
    )}
    <div className="container page-hero__inner">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </div>
  </section>
);

export default PageHero;
