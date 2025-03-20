import React from 'react';
import './Children.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  ScrollToTop from "../components/ScrollToTop"
import  Header from "../components/Header"
import  Image10 from "../assests/Image10.png"

const Children = () => {
  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      title: 'Bright Futures - Empowering Children Through Education',
      image: Image10,
      raisedAmount: 40495,
      goalAmount: 50000,
      organizer: 'susmita',
      lastUpdated: '49minutes',
      supporters: 106
    },
    {
      id: 2,
      title: 'Help Sangram Holder Fight Lung Cancer',
      image: '/images/sangram-holder.jpg',
      organizer: 'sangram',
      lastUpdated: '1hour',
      supporters: 202
    },
    {
      id: 3,
      title: 'Help Save Mr Fani Bhubanesʼs Bad Implant - 2nd Health Urgent Surgery in Apollo Hospital',
      image: '/images/fani-bhubanes.jpg',
      organizer: 'Mrs Fani Bhubana',
      lastUpdated: 'Niju Jhouli',
      supporters: 190
    },
    {
      id: 4,
      title: 'Help My Mother, Fight Very Rare, Aggressive Cancer - Oral Cancer | Chondgoudoursooma.',
      image: '/images/oral-cancer.jpg',
      organizer: 'Pratibah',
      lastUpdated: '49minutes',
      supporters: 106
    },
    {
      id: 5,
      title: 'Help Secure a Bright Future for 13-Year-Old Narmada After the Tragic Loss of Her Father',
      image: '/images/narmada-girl.jpg',
      organizer: 'Krishna',
      lastUpdated: '1hour',
      supporters: 202
    },
    {
      id: 6,
      title: 'Help Secure a Bright Future for 13-Year-Old Narmada After the Tragic Loss of Her Mother',
      image: '/images/narmada-mother.jpg',
      organizer: 'sangram',
      lastUpdated: '58minutes',
      supporters: 190
    },
    // Duplicate campaigns from above to fill the grid
    {
      id: 7,
      title: 'Help My Mother, Fight Very Rare, Aggressive Cancer - Oral Cancer | Chondgoudoursooma.',
      image: '/images/oral-cancer-2.jpg',
      organizer: 'Pratibah',
      lastUpdated: '49minutes',
      supporters: 106
    },
    {
      id: 8,
      title: 'Help Secure a Bright Future for 13-Year-Old Narmada After the Tragic Loss of Her Father',
      image: '/images/narmada-girl-2.jpg',
      organizer: 'Krishna',
      lastUpdated: '1hour',
      supporters: 202
    },
    {
      id: 9,
      title: 'Help Secure a Bright Future for 13-Year-Old Narmada After the Tragic Loss of Her Mother',
      image: '/images/narmada-mother-2.jpg',
      organizer: 'sangram',
      lastUpdated: '58minutes',
      supporters: 190
    },
    // Additional duplicates for the last row
    {
      id: 10,
      title: 'Help My Mother, Fight Very Rare, Aggressive Cancer - Oral Cancer | Chondgoudoursooma.',
      image: '/images/oral-cancer-3.jpg',
      organizer: 'Pratibah',
      lastUpdated: '49minutes',
      supporters: 106
    },
    {
      id: 11,
      title: 'Help Secure a Bright Future for 13-Year-Old Narmada After the Tragic Loss of Her Father',
      image: '/images/narmada-girl-3.jpg',
      organizer: 'Krishna',
      lastUpdated: '1hour',
      supporters: 202
    },
    {
      id: 12,
      title: 'Help Secure a Bright Future for 13-Year-Old Narmada After the Tragic Loss of Her Mother',
      image: '/images/narmada-mother-3.jpg',
      organizer: 'sangram',
      lastUpdated: '58minutes',
      supporters: 190
    }
  ];

  return (
    <div className="mitra-page">
    <ScrollToTop />

      <Header />

      {/* Zero Fee Banner */}
      <div className="fee-banner">
        <div className="fee-icon">
          <img src="/images/megaphone-icon.svg" alt="Announcement" />
        </div>
        <div className="fee-text">Crowdfunding charges No fees</div>
        <div className="fee-percentage">0%</div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-text">Thousands are fundraising online on Mitra</h2>
        <div className="dot-separator">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Category Icons */}
        <div className="category-icons">
          <div className="category-icon">
            <div className="icon-container medical">
              <img src="/images/medical-icon.svg" alt="Medical" />
            </div>
            <span>Medical</span>
          </div>
          <div className="category-icon">
            <div className="icon-container home">
              <img src="/images/home-icon.svg" alt="Home" />
            </div>
            <span>Home</span>
          </div>
          <div className="category-icon">
            <div className="icon-container children">
              <img src="/images/children-icon.svg" alt="Children" />
            </div>
            <span>Children</span>
          </div>
        </div>
      </section>

      {/* Campaign Grid */}
      <section className="campaign-grid">
        {campaigns.map(campaign => (
          <div className="campaign-card" key={campaign.id}>
            <div className="campaign-image">
              <img src={campaign.image} alt={campaign.title} />
            </div>
            <div className="campaign-details">
              <h3 className="campaign-title">{campaign.title}</h3>
              <div className="campaign-organizer">
                <div className="organizer-avatar">
                  <img src="/images/user-avatar.png" alt="User" />
                </div>
                <span>by {campaign.organizer}</span>
              </div>
              <div className="campaign-progress">
                <span className="raised-text">Raised out of</span>
                <div className="heart-icon">
                  <img src="/images/heart-icon.svg" alt="Support" />
                  <span>{campaign.supporters} supporters</span>
                </div>
              </div>
              {campaign.id === 1 && (
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${(campaign.raisedAmount / campaign.goalAmount) * 100}%` }}></div>
                </div>
              )}
              <div className="campaign-footer">
                <div className="last-updated">
                  <div className="clock-icon">
                    <img src="/images/clock-icon.svg" alt="Last updated" />
                  </div>
                  <span>last updated by {campaign.lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Motto */}
      <div className="motto">
        <h3>"Be the Change with Every Click"</h3>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Mitra</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#others">Others</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li>
                <button className="footer-donate-button">Donate</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Office address</h4>
            <p className="address">
              Flat 601, 6TH Lake Front,<br />
              Mullai Nagar, Akkarai,<br />
              Vanuvampettai, Thalakadu,<br />
              Sholinganallur, Karnataka
            </p>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul className="support-links">
              <li><a href="#medical">Medical</a></li>
              <li><a href="#old-age-home">Old age Home</a></li>
              <li><a href="#children">Children</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact us</h4>
            <p>For further queries contact:<br />
            Contact: +91-<br />
            Email: officemitra2020@gmail.com</p>
            <div className="give-change-inspire">
              <button className="inspire-button">Give. Change. Inspire.</button>
            </div>
          </div>
        </div>

        <div className="social-section">
          <div className="find-us">
            <p>Find us on</p>
            <div className="social-icons">
              <a href="#facebook"><img src="/images/facebook-icon.svg" alt="Facebook" /></a>
              <a href="#instagram"><img src="/images/instagram-icon.svg" alt="Instagram" /></a>
              <a href="#twitter"><img src="/images/twitter-icon.svg" alt="Twitter" /></a>
              <a href="#whatsapp"><img src="/images/whatsapp-icon.svg" alt="WhatsApp" /></a>
            </div>
          </div>
          <div className="contact-button-container">
            <button className="contact-floating-button">
              Contact <img src="/images/contact-icon.svg" alt="Contact Icon" />
            </button>
          </div>
        </div>

        <div className="copyright">
          <div className="copyright-links">
            <a href="#terms">Security & Privacy</a>
            <a href="#conditions">Conditions of use</a>
            <span className="copyright-text">© 2001-2023 Mitra.org All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Children;