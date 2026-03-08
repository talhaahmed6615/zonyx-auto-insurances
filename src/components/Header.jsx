import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container fade-in">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h1>ZONYX</h1>
            <span>Auto Insurance</span>
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="nav-item" onClick={closeMenu}>Contact</Link>
          {isHome ? (
             <a href="#quote" className="nav-btn" onClick={closeMenu}>Get a Quote</a>
          ) : (
             <Link to="/#quote" className="nav-btn" onClick={closeMenu}>Get a Quote</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
