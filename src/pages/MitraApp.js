import React from 'react';
import './MitraApp.css';
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assests/img.png';
import Image6 from '../assests/Image6.png';
import Image7 from '../assests/Image7.png';
import Image8 from '../assests/Image8.png';
import Image9 from '../assests/Image9.png';
import Image10 from '../assests/Image10.png';
import Image11 from '../assests/Image11.png';
import  ScrollToTop from "../components/ScrollToTop"


const MitraApp = () => {
  return (
    <div className="mitra-website">
    < ScrollToTop />
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Mitra" />
        </div>
        <nav className="navigation">
          <a href="MitraApp" className="nav-link active">Home</a>
          <a href="/pages/About" className="nav-link">About</a>
          <a href="#" className="nav-link">Support</a>
          <a href="#" className="nav-link">Others</a>
          <a href="MitraContactPage" className="nav-link">Contact</a>
        </nav>
        <button className="donate-button">Donate</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="title">Mitra</h1>
          <p className="subtitle">Free crowdfunding for India</p>
          <p className="description">Raise funds online for medical emergencies and social causes</p>
          <button className="donate-button">Donate</button>
        </div>
        <div className="hero-image">
          <img src="/mitra-hands.png" alt="Mitra hands with heart" />
        </div>
      </section>

      {/* No Fee Banner */}
      <section className="fee-banner">
        <div className="megaphone-icon">
          <img src="/megaphone-icon.svg" alt="Announcement" />
        </div>
        <p>Crowdfunding charges No fees</p>
        <span className="percentage">0%</span>
      </section>

      {/* Fundraising Section */}
      <section className="fundraising-section">
        <h2 className="section-title">Thousands are fundraising online on Mitra</h2>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          <div className="category-tab active">
            <img src="/medical-icon.svg" alt="Medical" />
            <Link to="/pages/Support">
            <p>Medical</p>
            </Link>
          </div>
          <div className="category-tab">
            <img src="/home-icon.svg" alt="Home" />
            <Link to="/pages/MitraApp">
            <p>Home</p>
            </Link>
          </div>
          <div className="category-tab">
            <img src="/children-icon.svg" alt="Children" />
            <Link to="/pages/Children">
            <p>Children</p>
            </Link>
          </div>
        </div>

        {/* Fundraiser Cards - First Row */}
        <div className="fundraiser-row">
          {/* Card 1 */}
          <div className="fundraiser-card">
            <div className="card-image">
              <img src={Image6} alt="Daughter fighting for her life" />
            </div>
            <div className="card-content">
              <h3 className="card-title">My Daughter Is Fighting For Her Life, Please Help Me Support To Save Her</h3>
              <div className="fundraiser-author">
                <img src={Image6} alt="User" className="user-icon" />
                <span>By Sunanda</span>
              </div>
              <p className="raised-text">Raised out of</p>
              <div className="progress-bar">
                <div className="progress" style={{width: "30%"}}></div>
              </div>
              <div className="amount-row">
                <span className="raised-amount">₹70,000</span>
                <span className="target-amount">₹1,000,000</span>
              </div>
              <div className="update-info">
              <Link to="/pages/Support">
                <span>last updated by 36minutes</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fundraiser-card">
            <div className="card-image">
              <img src={Image7} alt="Help Sangavi" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Help Sangram  Halder Fight Lung Cancer!</h3>
              <div className="fundraiser-author">
                <img src={Image7} alt="User" className="user-icon" />
                <span>By Sangam</span>
              </div>
              <p className="raised-text">Raised out of</p>
              <div className="progress-bar">
                <div className="progress" style={{width: "10%"}}></div>
              </div>
              <div className="amount-row">
                <span className="raised-amount">₹5,000</span>
                <span className="target-amount">₹1,000,000</span>
              </div>
              <div className="update-info">
                <span>last updated by Mins</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="fundraiser-card">
            <div className="card-image">
              <img src={Image8} alt="Sunitha needs blessing" />
            </div>
            <div className="card-content">
              <h3 className="card-title">SunriseHaven -A Home of love and care for the Elderly</h3>
              <div className="fundraiser-author">
                <img src={Image8} alt="User" className="user-icon" />
                <span>By  fani</span>
              </div>
              <p className="raised-text">Raised Rs 5,238 Raised out of Rs 700,000</p>
              <div className="progress-bar">
                <div className="progress" style={{width: "5%"}}></div>
              </div>
              <div className="amount-row">
                <span className="raised-amount">₹5,238</span>
                <span className="target-amount">₹700,000</span>
              </div>
              <div className="update-info">
              <Link to="/pages/SunriseHaven">
                <span>last updated by Help Your</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fundraiser Cards - Second Row */}
        <div className="fundraiser-row">
          {/* Card 4 */}
          <div className="fundraiser-card">
            <div className="card-image">
              <img src={Image9} alt="Help my mother" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Help My Mother, Fight very Rare Aggressive Cancer-Bile Duct Cancer/Cholangiocarcinoma</h3>
              <div className="fundraiser-author">
                <img src={Image9} alt="User" className="user-icon" />
                <span>By Parthap</span>
              </div>
              <p className="raised-text">Raised out of</p>
              <div className="progress-bar">
                <div className="progress" style={{width: "3%"}}></div>
              </div>
              <div className="amount-row">
                <span className="raised-amount">₹3,000</span>
                <span className="target-amount">₹500,000</span>
              </div>
              <div className="update-info">
                <span>last updated by 5minutes</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="fundraiser-card">
            <div className="card-image">
              <img src={Image10} alt="Help Manvi" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Help Secure a Bright Future for 13 Year-Old Naniyaka After the Tragic loss of her Father</h3>
              <div className="fundraiser-author">
                <img src="/user-icon.svg" alt="User" className="user-icon" />
                <span>By Kishore</span>
              </div>
              <p className="raised-text">Raised out of</p>
              <div className="progress-bar">
                <div className="progress" style={{width: "1%"}}></div>
              </div>
              <div className="amount-row">
                <span className="raised-amount">₹500</span>
                <span className="target-amount">₹200,000</span>
              </div>
              <div className="update-info">
              <Link to="pages/BrightFutures">
                <span>last updated by 1 hour</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="fundraiser-card">
            <div className="card-image">
              <img src={Image11} alt="Help Secure a Bright Future" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Help Secure a Bright Future for 14 Year-Old Naniyaka After the Tragic Loss of her Mother</h3>
              <div className="fundraiser-author">
                <img src="/user-icon.svg" alt="User" className="user-icon" />
                <span>By Sangram</span>
              </div>
              <p className="raised-text">Raised out of</p>
              <div className="progress-bar">
                <div className="progress" style={{width: "0%"}}></div>
              </div>
              <div className="amount-row">
                <span className="raised-amount">₹0</span>
                <span className="target-amount">₹200,000</span>
              </div>
              <div className="update-info">
              <Link to="/pages/Children">
                <span>last updated by 10minutes</span>
              </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="see-more">
          <a href="#">See more...</a>
        </div>
      </section>

      {/* What Mitra Offers Section */}
      <section className="offers-section">
        <h2 className="section-title">What Mitra offers?</h2>
        <div className="underline"></div>

        <div className="offers-grid">
          {/* Offer 1 */}
          <div className="offer-card">
            <div className="offer-icon heart-icon">
              <FontAwesomeIcon icon="fa-regular fa-heart" />
            </div>
            <div className="offer-text">
              <p>Starting a fundraiser on swayam NM is absolutely free.</p>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="offer-card">
            <div className="offer-icon chat-icon">
              <img src="/chat-icon.svg" alt="Chat" />
            </div>
            <div className="offer-text">
              <p>24×7 assistance from dedicated fundraiser managers throughout your fundraising journey.</p>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="offer-card">
            <div className="offer-icon currency-icon">
              <img src="/rupee-icon.svg" alt="Rupee" />
            </div>
            <div className="offer-text">
              <p>We accept donations in multiple currencies from anywhere in the world.</p>
            </div>
          </div>

          {/* Offer 4 */}
          <div className="offer-card">
            <div className="offer-icon arrow-icon">
              <img src="/arrow-icon.svg" alt="Arrow" />
            </div>
            <div className="offer-text">
              <p>You can withdraw your funds at any point during the course of your fundraiser.</p>
            </div>
          </div>

          {/* Offer 5 */}
          <div className="offer-card">
            <div className="offer-icon dashboard-icon">
              <img src="/dashboard-icon.svg" alt="Dashboard" />
            </div>
            <div className="offer-text">
              <p>Get instant updates on your fundraiser's progress on a real-time dashboard.</p>
            </div>
          </div>

          {/* Offer 6 */}
          <div className="offer-card">
            <div className="offer-icon card-icon">
              <img src="/card-icon.svg" alt="Card" />
            </div>
            <div className="offer-text">
              <p>Accepts donations all cards, netbanking, UPI and online wallets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What people are saying about Mitra</h2>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="testimonial-slider">
          <button className="prev-button">‹</button>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="/user-avatar.svg" alt="User" className="user-avatar" />
              <h3>Shivaram</h3>
            </div>
            <p className="testimonial-text">Great initiative from the team and really bold steps and the best wishes for them. All the best team and Keep Growing...</p>
          </div>
          <button className="next-button">›</button>
        </div>
      </section>


    </div>
  );
};

export default MitraApp;