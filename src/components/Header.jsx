import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setIsMenuOpen(false);

  // Close the drawer whenever the route changes — including via the browser's
  // back/forward buttons, which never fire the links' onClick. Adjusted during
  // render rather than in an effect so there is no extra commit.
  const routeKey = location.pathname + location.hash;
  const [lastRouteKey, setLastRouteKey] = useState(routeKey);
  if (routeKey !== lastRouteKey) {
    setLastRouteKey(routeKey);
    setIsMenuOpen(false);
  }

  // Lock the page behind the open drawer, and restore on unmount so a
  // route change mid-animation can't leave the body stuck.
  useEffect(() => {
    if (!isMenuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    // Desktop layout has no drawer — reset if the viewport grows.
    const desktop = window.matchMedia('(min-width: 993px)');
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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <Link to="/" onClick={closeMenu} className="logo-link" aria-label="Zonyx Auto Insurance — home">
          <Logo size={40} />
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? 'active' : ''}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

          {isHome ? (
            <a href="#quote" className="nav-btn" onClick={closeMenu}>Get a Quote</a>
          ) : (
            <Link to="/#quote" className="nav-btn" onClick={closeMenu}>Get a Quote</Link>
          )}
        </nav>

        <div
          className={`nav-scrim ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      </div>
    </header>
  );
};

export default Header;
