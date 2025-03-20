import React from 'react';
import './MitraApp.css';
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import Footer from "../components/Footer"
import { FaVolumeUp} from "react-icons/fa";
import { Baby, Users } from "lucide-react";
import { Home } from "@mui/icons-material";
import { FaHeart } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { FaCreditCard } from 'react-icons/fa';
import { Stethoscope } from "lucide-react";
import { FaRupeeSign, FaDollarSign, FaEuroSign, FaPoundSign } from 'react-icons/fa';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeadset } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import Logo from '../assests/img.png';
import H from '../assests/H.png';
import Image6 from '../assests/Image6.png';
import Image7 from '../assests/Image7.png';
import Image8 from '../assests/Image8.png';
import Image9 from '../assests/Image9.png';
import Image10 from '../assests/Image10.png';
import Image11 from '../assests/Image11.png';
import  ScrollToTop from "../components/ScrollToTop"
import Header from '../components/Header'

const MitraApp = () => {
  return (
    <div className="mitra-website">
         <Header />
         <ScrollToTop />
      {/* Hero Section */}
      <section className="hero-section mt-5">
        <div className="hero-content">
          <h1 className="title">Mitra</h1>
          <p className="subtitle">Free crowdfunding for India</p>
          <p className="description">Raise funds online for medical emergencies and social causes</p>
          <button className="donate-button">Donate</button>
        </div>
        <div className="hero-image">
          <img src={Logo} alt="Mitra hands with heart" />
        </div>
      </section>

      {/* No Fee Banner */}
      <section className="fee-banner">
        <div className="megaphone-icon">
         <FaVolumeUp size={30} color="green" />
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
           <Stethoscope size={32} color="blue" />
            <Link to="/pages/Support">
            <p>Medical</p>
            </Link>
          </div>
          <div className="category-tab">
         <Home fontSize="large" color="primary" />
         <Link to="/pages/MitraApp">
            <p>Home</p>
            </Link>
          </div>
          <div className="category-tab">
        <Baby size={32} color="blue" />
            <Link to="/pages/MitraCrowdfunding">
            <p>Children</p>
            </Link>
          </div>
        </div>

        {/* Fundraiser Cards - First Row */}

        <div className="fundraiser-row">
          {/* Card 1 */}
          <div className="fundraiser-card">
            <div className="card-image">
                <Link to="/pages/Support">
              <img src={Image6} alt="Daughter fighting for her life" />
                 </Link>
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
                <span>last updated by 36minutes</span>
              <div className="update-info">

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
              <Link to="/pages/SunriseHaven">
               <img src={Image8} alt="Sunitha needs blessing" />
               </Link>
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

                <span>last updated by Help Your</span>

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
              <Link to="pages/BrightFutures">
              <img src={Image10} alt="Help Manvi" />
              </Link>
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

                <span>last updated by 1 hour</span>

              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="fundraiser-card">
            <div className="card-image">
               <Link to="/pages/MitraCrowdfunding">
               <img src={Image11} alt="Help Secure a Bright Future" />
               </Link>
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
                <span>last updated by 10minutes</span>
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
            <div>
                 <FaHeart color="red" size={40} />

               </div>
            <div className="offer-text">
              <p>Starting a fundraiser on swayam NM is absolutely free.</p>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="offer-card">
            <div>
              <FaComment size={40} color="blue" />
            </div>
            <div className="offer-text">
              <p>24×7 assistance from dedicated fundraiser managers throughout your fundraising journey.</p>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="offer-card">
            <div className="offer-icon currency-icon">
            <FaRupeeSign size={40} color="green" />

            </div>
            <div className="offer-text">
              <p>We accept donations in multiple currencies from anywhere in the world.</p>
            </div>
          </div>

          {/* Offer 4 */}
          <div className="offer-card">
            <div className="offer-icon arrow-icon">
              <FontAwesomeIcon icon={faArrowRight} size="2x" color="green" />
            </div>
            <div className="offer-text">
              <p>You can withdraw your funds at any point during the course of your fundraiser.</p>
            </div>
          </div>

          {/* Offer 5 */}
          <div className="offer-card">
            <div className="offer-icon dashboard-icon">
         <MdDashboard size={40} color="blue" />


            </div>
            <div className="offer-text">
              <p>Get instant updates on your fundraiser's progress on a real-time dashboard.</p>
            </div>
          </div>

          {/* Offer 6 */}
          <div className="offer-card">
            <div className="offer-icon card-icon">


            </div>
            <div className="offer-text">
             <FaCreditCard size={40} color="blue" />
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
              <img src={H} alt="User" className="user-avatar" />
              <h3>Shivaram</h3>
            </div>
            <p className="testimonial-text">Great initiative from the team and really bold steps and the best wishes for them. All the best team and Keep Growing...</p>
          </div>
          <button className="next-button">›</button>
        </div>
      </section>

<Footer />
    </div>
  );
};

export default MitraApp;