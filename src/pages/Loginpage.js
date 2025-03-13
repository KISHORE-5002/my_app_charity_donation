import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../assests/img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from "./Signin"
import { Link } from "react-router-dom";



import "./loginpage.css";

const LoginPage = () => {
  return (
    <div>

      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="d-flex container bg-white rounded shadow overflow-hidden" style={{ maxWidth: "900px", width: "100%" }}>

          {/* Login Form */}
              <div className="flex-fill p-4 text-center">
            <h3 className="fw-bold">LOGIN</h3>
            <p>How to get started lorem ipsum dolor at?</p>
            <form>

              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input type="text" className="form-control" placeholder="Username" />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input type="password" className="form-control" placeholder="Password" />
              </div>

             <a href="/Signin" style={{ textDecoration: "none" }}>

                <Link to="/pages/AdminLogin">Admin Login</Link><br></br>
                <Link to="/pages/MitraApp">
               <button className="User-Login-btn">GetStart</button>
               </Link>

             </a>



            </form>

            <p className="mt-3 fw-bold">Login with Others</p>

            <div className="d-flex flex-column gap-2">
              <button className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faGoogle} /> Login with Google
              </button>
              <button className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faFacebook} /> Login with Facebook
              </button>

            </div>
            <Link to="/pages/Signin">
             <span className="Signin-btn">Signin/</span>
             </Link>
             <Link to="/pages/MitraSignup">
                  <span className="Signup-btn">Signup</span>
                  </Link>

          </div>

          {/* Image Container */}
          <div className="flex-fill d-flex justify-content-center align-items-center bg-light">
            <img src={Logo} alt="Mitra Logo" style={{ width: "70%" }} />
          </div>

        </div>
        </div>
    </div>
  );
};

export default LoginPage;