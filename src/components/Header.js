import React from 'react';
import Logo from '../assests/img.png';
import { Link } from "react-router-dom";
import './Header.css';// Make sure this CSS file exists

const Header = () => {
  // Handle smooth scrolling for anchor links
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Mitra Logo" className="logo-image" />
        <span className="logo-text">MITRA</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">


          <li className="nav-item"><a href="/pages/MitraApp" className="nav-link" onClick={(e) => scrollToSection(e, 'top')}>Home</a></li>
          <li className="nav-item"><a href="/pages/About" className="nav-link">About</a></li>
          <li className="nav-item"><a href="/pages/Support" className="nav-link">Support</a></li>
          <li className="nav-item"><a href="/pages/MitraCrowdfunding" className="nav-link">Others</a></li>
          <li className="nav-item"><a href="/pages/MitraContactPage" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="/pages/Donate" className="nav-link donate-button">Donate</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;