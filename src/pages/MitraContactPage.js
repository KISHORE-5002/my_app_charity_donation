import React from 'react';
import './MitraContactPage.css';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import  ScrollToTop from "../components/ScrollToTop"

const MitraContactPage = () => {
  return (
    <div className="mitra-page">
    <ScrollToTop />
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/mitra-logo.svg" alt="Mitra Logo" />
          <span>mitra</span>
        </div>
        <div className="nav-links">
          <a href="MitraApp">Home</a>
          <a href="About">About</a>
          <a href="#support">Support</a>
          <a href="#others">Others</a>
          <a href="MitraContactPage" className="active">Contact</a>
        </div>
        <button className="donate-btn">Donate</button>
      </nav>

      {/* Contact Header Section */}
      <header className="contact-header">
        <div className="contact-header-content">
          <h1>Contact us</h1>
          <p>We are here to help you and answer any questions you may have.</p>
          <p>Here is how to reach us!</p>
        </div>
        <div className="contact-header-image">
          <img src="/contact-illustration.svg" alt="Contact Illustration" />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Footer with Contact Info */}
        <footer className="footer">
          <div className="footer-section">
            <h3>Mitra</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#support">support</a>
              <a href="#others">Others</a>
              <a href="#contact">Contact us</a>
              <button className="footer-donate-btn">Donate</button>
            </div>
          </div>

          <div className="footer-section">
            <h3>Office address</h3>
            <p>
              Flat 201, BVR Lake Front,<br />
              1/2, Kanaka-Nagar<br />
              Veerannapalya, Nagavara,<br />
              Bengaluru, Karnataka<br />
              560045
            </p>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <div className="footer-links">
              <a href="#medical">Medical</a>
              <a href="#memorial">Memorial</a>
              <a href="#non-profits">Non-profits</a>
              <a href="#others-support">Others...</a>
            </div>
          </div>

          <div className="footer-section">
            <div className="inspire-box">
              <p>Give. Change. Inspire.</p>
            </div>
            <div className="find-us">
              <p>Find us on</p>
              <div className="social-icons">
                <a href="#facebook"><FaFacebook /></a>
                <a href="#instagram"><FaInstagram /></a>
                <a href="#twitter"><FaTwitter /></a>
                <a href="#whatsapp"><FaWhatsapp /></a>
              </div>
            </div>
            <div className="contact-button">
              <button className="contact-btn">
                Contact <span className="contact-icon">👤</span>
              </button>
            </div>
          </div>
        </footer>

        {/* Contact Us Section */}
        <div className="contact-us-section">
          <h3>Contact us</h3>
          <p>for further queries contact:</p>
          <p>Founder: Fani</p>
          <p>Contact: fanibhusana2002@gmail.com</p>
        </div>
      </main>

      {/* Dark Footer */}
      <div className="dark-footer"></div>
    </div>
  );
};

export default MitraContactPage;