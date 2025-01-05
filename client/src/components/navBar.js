import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar-container">
      <div className="logo">
        <Link to="/">Jalen Norris</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link></li>
          <li><Link to="/project" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
