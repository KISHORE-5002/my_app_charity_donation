
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"
import { Link } from "react-router-dom";
const Footer = () => {
  return (

<>
      {/* Footer */}
   <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Mitra</h3>
            <ul className="footer-links">
              <li><a href="MitraApp">Home</a></li>
              <li><a href="About">About</a></li>
              <li><a href="Support">Support</a></li>
              <li><a href="#">Others</a></li>
              <li><a href="MitraContactPage">Contact us</a></li>
              <li>
              <Link to="/pages/Donate">
              <button className="donate-button small">Donate</button>
              </Link>
              </li>
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
      </>
  );
};

export default Footer;
