import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT } from '../siteConfig';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/cover', label: 'Cover types' },
  { to: '/about', label: 'About us' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setIsMenuOpen(false);

  // Close on navigation, including browser back/forward. Adjusted during
  // render rather than in an effect so there is no extra commit.
  const routeKey = location.pathname + location.hash;
  const [lastRouteKey, setLastRouteKey] = useState(routeKey);
  if (routeKey !== lastRouteKey) {
    setLastRouteKey(routeKey);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => e.key === 'Escape' && closeMenu();
    const desktop = window.matchMedia('(min-width: 981px)');
    const onDesktop = (e) => e.matches && closeMenu();

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onDesktop);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner container-wide">
        <Link to="/" className="site-header__logo" aria-label="Zonyx Auto Insurance — home">
          <Logo size={60} />
        </Link>

        <nav
          id="primary-nav"
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="site-nav__actions">
            <a className="site-header__phone" href={CONTACT.phoneHref}>
              <Phone size={17} aria-hidden="true" />
              <span>
                <span className="site-header__phone-label">Talk to us</span>
                <span className="site-header__phone-number">{CONTACT.phone}</span>
              </span>
            </a>

            {isHome ? (
              <a href="#quote" className="btn btn-gold" onClick={closeMenu}>Get a quote</a>
            ) : (
              <Link to="/#quote" className="btn btn-gold" onClick={closeMenu}>Get a quote</Link>
            )}
          </div>
        </nav>

        <button
          className="site-header__toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <div
          className={`site-nav__scrim ${isMenuOpen ? 'is-open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      </div>
    </header>
  );
};

export default Header;
