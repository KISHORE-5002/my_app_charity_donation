import React, { useState } from 'react';
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import './signin.css';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt with:', email);
  };

  return (
    <div className="signin-container">

      <div className="signin-card">
        <div className="logo-container">
          <div className="small-logo">
            <img src="/mitra-small-logo.svg" alt="Mitra" />
            <span>mitra</span>
          </div>
        </div>

        <h1>Sign in your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="ex: jon.smith@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
            <Link to="/MitraApp">
          <button type="submit" className="sign-in-button">
            SIGN IN
          </button>
          </Link>
        </form>

        <div className="alternative-signin">
          <p>or sign in with</p>
          <div className="social-buttons">
            <button className="social-button google">
              <img src="/google-icon.svg" alt="Sign in with Google" />
            </button>
            <button className="social-button facebook">
              <img src="/facebook-icon.svg" alt="Sign in with Facebook" />
            </button>
          </div>
        </div>
         <Link to="MitraSignup">
        <p className="signup-prompt">
          Don't have an account? <a href="/signup">SIGN UP</a>
        </p>
        </Link>
      </div>

      <div className="brand-illustration">
        <img src="/mitra-illustration.svg" alt="Mitra Brand" className="mitra-illustration" />
      </div>
    </div>
  );
};

export default Signin;