import React, { useState } from 'react';
import './Donate.css';
import { Link } from "react-router-dom";
import Logo from '../assests/img.png';

const Donate = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+91');

  return (
    <div className="mitra-page">
      <div className="mitra-header">
        <div className="mitra-logo">
          <img src={Logo} alt="Mitra Logo" />
        </div>
      </div>

      <div className="contact-form-container">
        <div className="contact-form">
          <h2 className="form-title">Contact Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input-group">
              <div className="country-code">
                <button className="country-code-btn">
                  {phoneCode} <span className="dropdown-arrow">▼</span>
                </button>
              </div>
              <input type="tel" id="phone" className="form-control phone-input" />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">Mark the user as Anonymous</span>
            </label>
          </div>

          <div className="form-group checkbox-group terms-group">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              <span className="checkbox-label">
                By continuing, you are agreeing to <a href="/terms" className="terms-link">Terms and use</a> and <a href="/privacy" className="terms-link">Privacy policy</a>
              </span>
            </label>
          </div>

          <div className="form-actions">
          <Link to="/pages/Mitra">
            <button className="continue-btn">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;