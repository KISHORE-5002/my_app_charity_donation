import React from 'react';
import './MitraCrowdfunding.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Image10 from '../assests/Image10.png';
import  ScrollToTop from "../components/ScrollToTop"


const MitraCrowdfunding = () => {
  // Sample fundraising data
  const fundraisers = [
    {
      id: 1,
      title: 'Bright Futures - Empowering Children Through Education',
      image: '../assests/Image10.png',
      raisedAmount: 40405,
      goalAmount: 50000,
      creator: 'susmiya',
      supporters: 68,
      lastUpdated: '49 minutes'
    },
    {
      id: 2,
      title: 'Help Sangram Holder Fight Lung Cancer',
      image: 'sangram-cancer.jpg',
      raisedAmount: 0,
      goalAmount: 0,
      creator: 'sangram',
      supporters: 42,
      lastUpdated: '5 hours'
    },
    {
      id: 3,
      title: 'Help Save MY Fani (Khuntana Bai) Vendors - 2nd Wash Urgent Surgery',
      image: 'fani-surgery.jpg',
      raisedAmount: 0,
      goalAmount: 0,
      creator: 'Mrs Fani Bhushana',
      supporters: 26,
      lastUpdated: 'Hep Jhola'
    },
    {
      id: 4,
      title: 'Help My Mother, Fight Very Rare, Aggressive Cancer, Give Her A Chance! | Chalagundlavenna',
      image: 'mother-cancer.jpg',
      raisedAmount: 0,
      goalAmount: 0,
      creator: 'Pramob',
      supporters: 155,
      lastUpdated: '49 minutes'
    },
    {
      id: 5,
      title: 'Help Secure a Bright Future for 13-Year-Old Nivedhya After the Tragic Loss of Her Father',
      image: 'nivedhya-future.jpg',
      raisedAmount: 0,
      goalAmount: 0,
      creator: 'Kadayam',
      supporters: 63,
      lastUpdated: '1 hour'
    },
    {
      id: 6,
      title: 'Help Secure a Bright Future for 13-Year-Old Nivedhya After the Tragic Loss of Her Mother',
      image: 'nivedhya-mother.jpg',
      raisedAmount: 0,
      goalAmount: 0,
      creator: 'sangram',
      supporters: 63,
      lastUpdated: '59 minutes'
    },
  ];

  // Duplicate some fundraisers to match the layout in the image
  const allFundraisers = [
    ...fundraisers,
    ...fundraisers.slice(3, 6),
    ...fundraisers.slice(3, 6),
  ];

  return (
    <div className="mitra-container">
    <ScrollToTop />
      {/* Header */}
      <header className="header">

        <nav className="navigation">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link support">Support</a>
          <a href="#" className="nav-link">Others</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <button className="donate-button">Donate</button>
      </header>

      {/* No Fees Banner */}
      <div className="no-fees-banner">
        <div className="megaphone-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
        <div className="banner-text">Crowdfunding charges No fees</div>
        <div className="percentage">0%</div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <h2 className="hero-title">Thousands are fundraising online on Mitra</h2>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="category-buttons">
          <button className="category-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span>Medical</span>
          </button>
          <button className="category-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2a1 1 0 001-1v-7m-6 0a1 1 0 00-1 1v7"></path>
            </svg>
            <span>Home</span>
          </button>
          <button className="category-button active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span>Children</span>
          </button>
        </div>

        {/* Fundraiser Cards */}
        <div className="fundraiser-grid">
          {allFundraisers.map((fundraiser, index) => (
            <div className="fundraiser-card" key={`${fundraiser.id}-${index}`}>
              <div className="card-image-container">
                <img src="#" alt={fundraiser.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{fundraiser.title}</h3>
                <div className="creator-info">
                  <div className="creator-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span className="by-text">by {fundraiser.creator}</span>
                </div>

                <div className="fundraiser-progress">
                  <div className="progress-text">
                    {fundraiser.id === 1 ?
                      `₹${fundraiser.raisedAmount.toLocaleString()} raised out of ₹${fundraiser.goalAmount.toLocaleString()} goal` :
                      'Raised out of'
                    }
                  </div>
                  <div className="supporters">
                    <svg viewBox="0 0 24 24" fill="red" stroke="currentColor" strokeWidth="2">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span>{fundraiser.supporters} supporters</span>
                  </div>
                </div>

                <div className="last-updated">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>last updated by {fundraiser.lastUpdated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Tagline */}
      <div className="tagline">
        "Be the Change with Every Click"
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Mitra</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Others</a></li>
              <li><a href="#">Contact us</a></li>
              <li><button className="donate-button small">Donate</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Office address</h3>
            <p className="address">
              Flat 401, 6TH Lane Finch<br />
              Complex, Kaveri Road,<br />
              Mahalakshmi, Navadeep,<br />
              Siddharth, Karnataka
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links support-links">
              <li><a href="#">Medical</a></li>
              <li><a href="#">Old age Home</a></li>
              <li><a href="#">Children</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact us</h3>
            <p className="contact-info">
              For further queries contact:<br />
              Contact: 8951-1022-33<br />
              Email: Mitra.support2023@gmail.com
            </p>
            <button className="inspire-button">Give. Change. Inspire.</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <h3 className="footer-title">Find us on</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-button-container">
            <button className="contact-button">
              Contact
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM8 16a2 2 0 114 0 2 2 0 01-4 0zm4-8a2 2 0 11-4 0 2 2 0 014 0zm4 8a2 2 0 110-4 2 2 0 010 4zm0-8a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-legal">
          <a href="#">Security & Privacy</a>
          <span className="divider">|</span>
          <a href="#">Conditions of use</a>
          <span className="divider">|</span>
          <span className="copyright">© 2023 Mitraorg All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default MitraCrowdfunding;