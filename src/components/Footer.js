
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 px-3">
      <div className="container">
        <div className="row">
          {/* Column 1: Brand & Links */}
          <div className="col-md-3">
            <h2 className="border-bottom border-danger d-inline-block pb-1">Mitra</h2>
            <ul className="list-unstyled mt-3">
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Others</li>
              <li>Contact us</li>
            </ul>
            <button className="btn btn-danger mt-3">Donate</button>
          </div>

          {/* Column 2: Office Address */}
          <div className="col-md-3">
            <h3 className="border-bottom border-danger d-inline-block pb-1">Office address</h3>
            <p className="mt-3">Flat 201, BVR Lake Front,<br />1/2, Kanaka-Nagar, Veerannapalya,<br />Nagavara, Bengaluru, Karnataka 560045</p>
          </div>

          {/* Column 3: Support */}
          <div className="col-md-3">
            <h3 className="border-bottom border-danger d-inline-block pb-1">Support</h3>
            <ul className="list-unstyled mt-3">
              <li>Medical</li>
              <li>Memorial</li>
              <li>Non-profits</li>
              <li>Others...</li>
            </ul>
            <h3 className="mt-4">Find us on</h3>
            <div className="d-flex gap-3 mt-2">
              <FaFacebook className="fs-4" />
              <FaTwitter className="fs-4" />
              <FaWhatsapp className="fs-4" />
            </div>
          </div>

          {/* Column 4: Contact Button */}
          <div className="col-md-3 d-flex flex-column align-items-center gap-3">
            <button className="btn btn-dark">Give. Change. Inspire.</button>
            <button className="btn btn-success d-flex align-items-center">Contact</button>
          </div>
        </div>
      </div>

      <div className="border-top mt-4 pt-3 text-center small text-muted">
        <p>Security & Privacy | Conditions for use</p>
        <p>© 2024-2025 Mitra.org. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
