import React from 'react';
import './BrightFutures.css';
import Footer from '../components/Footer';
import Image10 from '../assests/Image10.png';
import { FaVolumeUp} from "react-icons/fa";
import boys from '../assests/boys.png';
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import  ScrollToTop from "../components/ScrollToTop"
import Header from '../components/Header'

const BrightFutures = () => {
  return (
    <div className="page-container">
    <ScrollToTop />
      <Header />

      <main className="main-content">
        <h1 className="page-title">Bright Futures – Empowering Children Through Education</h1>

        <div className="content-container">
          <div className="left-column">
            <div className="campaign-image-container">
              <img src={Image10} alt="Child writing on blackboard" className="campaign-image" />
            </div>

            <div className="about-section">
              <div className="author-info">
                <div className="avatar">
                  <img src={boys} alt="Avatar" />
                </div>
                <div className="author-text">
                  <p className="author-created">created</p>
                  <p className="author-name">by Bright</p>
                </div>
              </div>

              <h2 className="section-title">About</h2>
              <h3 className="subsection-title">About the Fundraiser</h3>
              <p className="fundraiser-description">
                Bright Futures is dedicated to supporting underprivileged children by providing them with the education they deserve. Every child has the right to learn, grow, and build a better future, but many lack the resources to continue their studies. Our mission is to bridge this gap by offering financial aid, school supplies, and mentorship programs to ensure that no child is left behind. Through your support, we can empower young minds, break the cycle of poverty, and give them the opportunity to dream big. Together, we can transform lives—one child at a time.
              </p>
            </div>

            <div className="supporters-section">
              <h3 className="supporters-title">Most raised via social sharing and supporters</h3>
              <div className="divider">
                <span className="divider-dot"></span>
                <span className="divider-dot"></span>
                <span className="divider-dot"></span>
              </div>

              <div className="supporters-list">
                <div className="supporter-item">
                  <span className="supporter-name">Anonymous</span>
                  <span className="supporter-amount">₹ 1430</span>
                </div>
                <div className="supporter-item">
                  <span className="supporter-name">Mr. Kishore</span>
                  <span className="supporter-amount">₹ 1,999</span>
                </div>
                <div className="supporter-item">
                  <span className="supporter-name">Mrs. Fani</span>
                  <span className="supporter-amount">₹ 823</span>
                </div>
                <div className="supporter-item">
                  <span className="supporter-name">Anonymous</span>
                  <span className="supporter-amount">₹ 1450</span>
                </div>
              </div>

              <button className="inspire-button">Give. Change. Inspire.</button>
            </div>
          </div>

          <div className="right-column">
            <div className="donation-card">
              <Link to="/pages/Donate">
              <button className="contribute-now">
                <span className="heart-icon">♥</span> Contribute now
              </button>
              </Link>

              <div className="amount-raised">
                <div className="amount">
                  <span className="rupee-symbol">₹</span> 4503
                </div>
                <div className="target">
                  <span className="raised-text">Raised out of</span>
                  <span className="target-amount">₹ 28,000</span>
                  <span className="goal">goal</span>
                </div>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '16%' }}></div>
              </div>

              <div className="update-info">
                <div className="last-updated">
                  <span className="clock-icon">⏱</span>
                  <span>last updated by 8hours</span>
                </div>
                <div className="supporters-count">
                  <span className="heart-icon">❤️</span>
                  <span>589 supports</span>
                </div>
              </div>

              <div className="details-section">
                <h4 className="details-title">Details:</h4>

                <div className="detail-item">
                  <p className="detail-label">campaigner</p>
                  <p className="detail-value">Bright Future</p>
                  <p className="detail-location">
                    <span className="location-icon">📍</span> Banglore
                  </p>
                </div>

                <div className="detail-item">
                  <p className="detail-label">Beneficiary</p>
                  <p className="detail-value">Bright Futures children's</p>
                  <p className="detail-location">
                    <span className="location-icon">📍</span> Banglore
                  </p>
                </div>
              </div>

              <button className="contribute-now-heart">
                Contribute now <span className="heart-icon">♥</span>
              </button>

              <div className="donation-form">
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
                <Link to="/pages/Donate">
                <button className="donate-button">Donate</button>
                </Link>
                <p className="form-footer">"Be the Change with Every Click"</p>
              </div>

              <div className="quote-section">
                <p className="quote">
                  "Not all of us can do great things. But we can do small things with great love."
                </p>
                <p className="quote-author">-Mother Teresa</p>
              </div>
            </div>

            <div className="no-fees-section">
              <div className="megaphone-icon">
                  <FaVolumeUp size={30} color="green" />
              </div>
              <div className="no-fees-text">
                <p>Crowdfunding charges No fees</p>
              </div>
              <div className="fees-percentage">0%</div>
            </div>
          </div>
        </div>
      </main>

<Footer />
    </div>
  );
};

export default BrightFutures;