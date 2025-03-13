import React from 'react';
import './Support.css';
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import  ScrollToTop from "../components/ScrollToTop"
import  Header from "../components/Header"
import  Footer from "../components/Footer"

const Support = () => {
  return (
    <div className="mitra-website ">
    <ScrollToTop />
      {/* Header */}
     <Header />

      {/* Main Content */}
      <main className="main-content">
        <h1 className="main-title">My Daughter Is Fighting For Her Life And We Need Your Support To Save Her.</h1>

        <div className="fundraiser-container">
          <div className="fundraiser-content">
            <div className="patient-image">
              <img src="/patient.jpg" alt="Patient in hospital" />
            </div>

            <div className="creator-info">
              <div className="profile-circle">
                <img src="/profile.png" alt="Profile icon" />
              </div>
              <div className="creator-text">
                <p className="created-by">created by sowmya</p>
              </div>
            </div>

            <div className="about-section">
              <h2>About</h2>
              <div className="about-fundraiser">
                <h3>About the Fundraiser</h3>
                <p>Hello all,</p>
                <p>My name is Sowmya n, and I am reaching out to you with an urgent plea seeking financial support for my daughter Eno Yamanaka's recovery in a neuro rehabilitation center from subarachnoid hemorrhage. Eno Yamanaka is currently admitted in neuro rehabilitation center which is costing around 7-Lakh for 8-weeks, it all happened with her brain hemorrhage on 22-April-2025 for which she undergone surgery in Tieten Medicty Hospita Sana is a vibrant and strong young woman, thirty years old only, but life has taken a devastating turn for her and our family. She has been diagnosed with a subarachnoid hemorrhage, a life-threatening condition caused by a ruptured brain aneurysm. She has gone under intensive treatment at Tieten Medicity Hospital, Banglore.</p>
              </div>
            </div>

            <div className="social-section">
              <h3>Most raised via social sharing and supporters</h3>
              <div className="divider">
                <span>◆</span>
                <span>◆</span>
                <span>◆</span>
              </div>

              <div className="supporters-list">
                <div className="supporter">
                  <span className="supporter-name">Mr. Prathab</span>
                  <span className="supporter-amount">₹ 14,000</span>
                </div>
                <div className="supporter">
                  <span className="supporter-name">Mr. Rakesh</span>
                  <span className="supporter-amount">₹ 13,999</span>
                </div>
                <div className="supporter">
                  <span className="supporter-name">Mrs. Fani</span>
                  <span className="supporter-amount">₹ 8,000</span>
                </div>
                <div className="supporter">
                  <span className="supporter-name">Anonymous</span>
                  <span className="supporter-amount">₹ 14,000</span>
                </div>
              </div>

              <button className="inspire-btn">Give. Change. Inspire.</button>
            </div>
          </div>

          <div className="fundraiser-sidebar">
            <button className="contribute-btn">
              <span className="heart-icon">♥</span> Contribute now
            </button>

            <div className="fundraiser-stats">
              <h2 className="amount-raised">₹ 2,80,000</h2>
              <p className="goal-text">Raised out of <span className="goal-amount">₹ 7,00,000</span> goal</p>

              <div className="progress-bar">
                <div className="progress" style={{ width: '40%' }}></div>
              </div>

              <div className="update-info">
                <div className="last-updated">
                  <span className="clock-icon">⏱</span>
                  <span>last updated by 8hours</span>
                </div>
                <div className="supporters-count">
                  <span className="heart-small">❤️</span>
                  <span>589 supports</span>
                </div>
              </div>
            </div>

            <div className="details-box">
              <h3>Details:</h3>

              <div className="detail-item">
                <h4>campaigner</h4>
                <p>Sowmya N</p>
                <div className="location"><span className="location-icon">◉</span> Banglore</div>
              </div>

              <div className="detail-item">
                <h4>Beneficiary</h4>
                <p>Eno Yamanaka</p>
                <div className="location"><span className="location-icon">◉</span> Banglore</div>
              </div>
            </div>

            <div className="contribute-form">
              <h2 className="contribute-title">Contribute now <span className="heart-icon">♥</span></h2>

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

                <button type="submit" className="donate-submit-btn">Donate</button>
              </form>

              <p className="click-text">"Be the Change with Every Click"</p>

              <div className="quote">
                <p>"Not all of us can do great things. But we can do small things with great love."</p>
                <p className="quote-author">-Mother Teresa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fee-banner">
          <div className="megaphone-icon">
            <img src="/megaphone.png" alt="Megaphone" />
          </div>
          <p className="fee-text">Crowdfunding charges No fees</p>
          <p className="fee-percentage">0%</p>
        </div>
      </main>

<Footer />
    </div>
  );
};

export default Support;