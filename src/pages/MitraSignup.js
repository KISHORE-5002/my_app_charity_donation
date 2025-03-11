import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import React, { useState } from 'react';
import './MitraSignup.css';
import Header from "../components/Header"

const MitraSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="mitra-container">
    <Header />


      <h1 className="title">Create your account</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="ex: jon smith"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ex: jon.smith@email.com"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="terms-container">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="checkbox"
          />
          <label htmlFor="terms" className="terms-label">
            I understood the <a href="#" className="terms-link">terms & policy</a>.
          </label>
        </div>

        <button type="submit" className="sign-in-button">SIGN IN</button>

        <div className="divider">
          <span className="divider-text">or sign up with</span>
        </div>

        <div className="social-login">
          <button type="button" className="social-button google">
            <img src="/google-icon.svg" alt="Google" />
          </button>
          <button type="button" className="social-button facebook">
            <img src="/facebook-icon.svg" alt="Facebook" />
          </button>
        </div>

        <div className="login-link">
          Have an account? <a href="/pages/Signin" className="sign-in-link">SIGN IN</a>
          <div className="login-link"><a href="/pages/Loginpage" className="login-in-link"/>LOGIN</div>
        </div>
      </form>
    </div>
  );
};

export default MitraSignup;