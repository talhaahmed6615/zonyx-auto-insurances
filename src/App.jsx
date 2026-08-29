import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';

/**
 * Restores scroll on navigation. A hash (e.g. "/#quote" from another page)
 * has to win over the reset, otherwise cross-page anchor links land at the
 * top instead of the section they name.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        // Wait for the incoming route to paint before measuring.
        const id = requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return () => cancelAnimationFrame(id);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

/** Reveals `.fade-in` elements as they enter the viewport. */
const useScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll('.fade-in:not(.visible)');

    // No IntersectionObserver (or reduced motion) — show everything at once
    // so content is never stuck at opacity 0.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReduced) {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // The huge top margin makes anything scrolled *past* count as
        // intersecting. Without it, an instant jump (anchor link, scroll
        // restoration) skips the elements in between and leaves them stuck
        // at opacity 0. The negative bottom margin still holds elements back
        // until they are properly on screen when scrolling down.
        rootMargin: '100000px 0px -40px 0px',
        threshold: 0,
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
};

const MainApp = () => {
  useScrollReveal();

  return (
    <div className="app-container">
      <div className="noise-overlay" aria-hidden="true"></div>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollManager />
      <MainApp />
    </Router>
  );
}

export default App;
