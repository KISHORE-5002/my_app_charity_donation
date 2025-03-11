import React from 'react';
import './SunriseHaven.css';
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import  ScrollToTop from "../components/ScrollToTop"

const SunriseHaven = () => {
  return (
    <div className="page-container">
    <ScrollToTop />
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo.svg" alt="Mitra logo" className="logo" />
        </div>
        <nav className="navigation">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link active">Support</a>
          <a href="#" className="nav-link">Others</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <button className="donate-button">Donate</button>
      </header>

      {/* Main content */}
      <main className="main-content">
        <h1 className="main-title">Sunrise Haven – A Home of Love and Care for the Elderly</h1>

        {/* Fundraiser info section */}
        <div className="fundraiser-section">
          <div className="left-column">
            <div className="image-container">
              <img src="/elderly-woman.jpg" alt="Elderly woman looking out window" className="main-image" />
            </div>

            <div className="creator-info">
              <div className="avatar">
                <img src="/avatar.svg" alt="Avatar" />
              </div>
              <div className="creator-text">
                <p className="created-text">created</p>
                <p className="creator-name">by Fani Bhusan</p>
              </div>
            </div>

            <div className="fundraiser-about">
              <h2 className="section-heading">About</h2>
              <h3 className="subsection-heading">About the Fundraiser</h3>
              <p className="about-text">
                Sunrise Haven is a peaceful and loving home for the elderly, dedicated to providing a safe, comfortable, and nurturing environment for senior citizens. Our mission is to ensure that every resident lives with dignity, joy, and a sense of belonging. With well-furnished living spaces, 24/7 medical care, and personalized support, we strive to make their golden years truly fulfilling. We also offer engaging activities, nutritious meals, and a compassionate community where they can form meaningful connections. With your support, we can continue to bring warmth and happiness to the lives of those who once shaped our society. Every contribution helps us create a better future for our elders.
              </p>
            </div>

            <div className="supporters-section">
              <h3 className="supporters-heading">Most raised via social sharing and supporters</h3>
              <div className="divider">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              <div className="supporters-list">
                <div className="supporter-item">
                  <span className="supporter-name">Mr. Prathab</span>
                  <span className="currency-symbol">₹</span>
                  <span className="donation-amount">1,000</span>
                </div>
                <div className="supporter-item">
                  <span className="supporter-name">Mr. Yash</span>
                  <span className="currency-symbol">₹</span>
                  <span className="donation-amount">1389</span>
                </div>
                <div className="supporter-item">
                  <span className="supporter-name">Anonymous</span>
                  <span className="currency-symbol">₹</span>
                  <span className="donation-amount">800</span>
                </div>
                <div className="supporter-item">
                  <span className="supporter-name">Anonymous</span>
                  <span className="currency-symbol">₹</span>
                  <span className="donation-amount">1400</span>
                </div>
              </div>

              <button className="inspire-button">Give. Change. Inspire.</button>
            </div>
          </div>

          <div className="right-column">
            <button className="contribute-now-button">
              <span className="heart-icon">♥</span> Contribute now
            </button>

            <div className="fundraiser-stats">
              <div className="amount-raised">
                <span className="currency-symbol">₹</span> 40,234
              </div>
              <div className="goal-info">
                <span className="raised-text">Raised out of</span>
                <span className="currency-symbol">₹</span> 70,000
                <span className="goal-text">goal</span>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress" style={{ width: '58%' }}></div>
              </div>
            </div>

            <div className="last-updated">
              <span className="clock-icon">⏱</span>
              <span className="updated-text">last updated by Bhours</span>
              <div className="supporters-count">
                <span className="heart-icon small">♥</span>
                <span className="count">589</span>
                <span className="supports-text">supports</span>
              </div>
            </div>

            <div className="details-section">
              <h3 className="details-heading">Details:</h3>

              <div className="detail-box">
                <div className="detail-label">campaigner</div>
                <div className="detail-value">Fani Bhusana</div>
                <div className="location">Banglore</div>
              </div>

              <div className="detail-box">
                <div className="detail-label">Beneficiary</div>
                <div className="detail-value">Sunrise Haven oldage Home</div>
                <div className="location">Banglore</div>
              </div>
            </div>

            <div className="donation-form">
              <h2 className="contribute-heading">Contribute now <span className="heart-icon">♥</span></h2>

              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" placeholder="Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" placeholder="Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="contribution">Contribution:</label>
                  <input type="text" id="contribution" placeholder="Contribution" />
                </div>

                <button type="submit" className="donate-button form-button">Donate</button>
              </form>

              <p className="tagline">"Be the Change with Every Click"</p>
            </div>

            <div className="quote-section">
              <p className="quote">
                "Not all of us can do great things. But we can do small things with great love."
              </p>
              <p className="quote-author">-Mother Teresa</p>
            </div>
          </div>
        </div>

        <div className="fees-section">
          <div className="fees-icon">
            <img src="/megaphone.svg" alt="Megaphone icon" />
          </div>
          <div className="fees-text">Crowdfunding charges No fees</div>
          <div className="fees-percentage">0%</div>
        </div>
      </main>


    </div>
  );
};

export default SunriseHaven;