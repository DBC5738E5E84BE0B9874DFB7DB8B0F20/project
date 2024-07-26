import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="logo">One Life Health Care</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
