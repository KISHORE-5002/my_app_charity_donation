import React from "react";
import "./AdminLogin.css";
import  ScrollToTop from "../components/ScrollToTop"

const AdminLogin = () => {
  return (

    <div className="container">
     <ScrollToTop />
      <div className="login-box">

        {/* Left Section - Gradient Background */}
        <div className="left-panel">
          <h2>Welcome to the Mitra Orphan’s</h2>
        </div>

        {/* Right Section - Login Form */}
        <div className="right-panel">
          <h3>Login as an Admin User</h3>
          <form>
            <input
              type="email"
              placeholder="seenu@admin"
              className="input-field"
            />
            <input
              type="password"
              placeholder="••••••••"
              className="input-field"
            />

            <a href="#" className="link">Reset your password</a>

            <button className="sign-in-btn">Sign In</button>

            <div className="footer-text">
              <a href="#" className="link">Get help? Signed in</a>
            </div>

            <div className="footer-text">
              Terms of use. Privacy policy
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
