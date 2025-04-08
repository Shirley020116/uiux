import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  return (
    
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <h1>Shirley</h1>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeLink === link.id ? 'active' : ''}
                onClick={() => setActiveLink(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
