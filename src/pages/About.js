import React from 'react';
import "./About.css"
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import  ScrollToTop from "../components/ScrollToTop"


function About() {
  return (
    <div className="mitra-website">
    <ScrollToTop />
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section relative h-64 bg-gray-300">
        <div className="hero-content p-8">
          <h1 className="text-pink-600 text-3xl font-medium mb-2">Mitra</h1>
          <div className="text-white max-w-md">
            <p className="text-xl">
              Raise funds online for medical emergencies and social causes
            </p>
            <p className="text-2xl mt-8 font-medium">Give. Change. Inspire.</p>
          </div>
        </div>
        <div className="hero-image absolute inset-0 z-0">
          <img
            src="/api/placeholder/800/300"
            alt="Hands holding each other"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Zero Fee Banner */}
      <section className="fee-banner bg-gray-100 p-4 flex items-center">
        <div className="icon bg-white p-2 rounded-md mr-4">
          <img src="/api/placeholder/32/32" alt="No fee icon" className="w-8 h-8" />
        </div>
        <div className="text flex items-center">
          <p className="font-medium">Crowdfunding charges No fees</p>
          <span className="text-4xl font-bold text-gray-300 ml-8">0%</span>
        </div>
      </section>

      {/* About Mitra */}
      <section className="about-mitra p-8 bg-gradient-to-r from-amber-200 to-amber-50 flex">
        <div className="image-container w-1/3">
          <img src="/api/placeholder/200/300" alt="Helping hands" className="h-full object-cover" />
        </div>
        <div className="content w-2/3 p-8">
          <h2 className="text-2xl text-pink-600 mb-4 font-medium border-b-2 border-green-500 inline-block pb-1">Mitra</h2>
          <p className="text-gray-700 leading-relaxed">
            Mitra is a charity-based crowdfunding platform that simplifies online donations,
            making fundraising more accessible and efficient. Developed with modern
            web technologies, it offers a user-friendly interface, secure payment integration,
            and real-time tracking of donations to support meaningful causes.
          </p>
        </div>
      </section>

      {/* Fundraising Stats */}
      <section className="stats-section text-center py-6">
        <p className="mb-2">Thousands are fundraising online on Mitra</p>
        <div className="dots flex justify-center space-x-2 mb-8">
          <span className="h-2 w-2 rounded-full bg-pink-400"></span>
          <span className="h-2 w-2 rounded-full bg-purple-400"></span>
          <span className="h-2 w-2 rounded-full bg-pink-400"></span>
        </div>

        {/* Feature Icons */}
        <div className="features flex justify-center space-x-12">
          <div className="feature text-center">
            <img src="/api/placeholder/40/40" alt="Medical" className="mx-auto mb-2" />
            <p className="text-sm">Medical</p>
          </div>
          <div className="feature text-center">
            <img src="/api/placeholder/40/40" alt="Home" className="mx-auto mb-2" />
            <p className="text-sm">Home</p>
          </div>
          <div className="feature text-center">
            <img src="/api/placeholder/40/40" alt="Social" className="mx-auto mb-2" />
            <p className="text-sm">Social</p>
          </div>
        </div>
      </section>

      {/* Fundraising Cards */}
      <section className="fundraising-cards px-4 py-8">
        <div className="cards-container flex space-x-4 mb-4">
          <div className="card bg-white rounded-lg shadow-md overflow-hidden w-1/3">
            <img src="/api/placeholder/300/150" alt="Fundraiser 1" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2">My Daughter Is Fighting For Her Life, And We Need Your Support</h3>
              <div className="organizer flex items-center mb-2">
                <img src="/api/placeholder/24/24" alt="Organizer" className="w-6 h-6 rounded-full mr-2" />
                <span className="text-xs text-gray-600">by fundraiser</span>
              </div>
              <p className="text-xs mb-2">Raised out of</p>
              <div className="progress-bar bg-gray-200 h-1 w-full mb-2">
                <div className="bg-green-500 h-1 w-1/3"></div>
              </div>
              <button className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 mt-2">
                Last updated by Someone
              </button>
            </div>
          </div>

          <div className="card bg-white rounded-lg shadow-md overflow-hidden w-1/3">
            <img src="/api/placeholder/300/150" alt="Fundraiser 2" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2">Help Educate Needy Kids Living In Slums</h3>
              <div className="organizer flex items-center mb-2">
                <img src="/api/placeholder/24/24" alt="Organizer" className="w-6 h-6 rounded-full mr-2" />
                <span className="text-xs text-gray-600">by organizer</span>
              </div>
              <p className="text-xs mb-2">Raised out of</p>
              <div className="progress-bar bg-gray-200 h-1 w-full mb-2">
                <div className="bg-green-500 h-1 w-2/3"></div>
              </div>
              <button className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 mt-2">
                Last updated by Person
              </button>
            </div>
          </div>

          <div className="card bg-white rounded-lg shadow-md overflow-hidden w-1/3">
            <img src="/api/placeholder/300/150" alt="Fundraiser 3" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2">Help Secure A Bright Future For 12 Children In School From Poor Families In Their Future</h3>
              <div className="organizer flex items-center mb-2">
                <img src="/api/placeholder/24/24" alt="Organizer" className="w-6 h-6 rounded-full mr-2" />
                <span className="text-xs text-gray-600">by fundraiser</span>
              </div>
              <p className="text-xs mb-2">Raised out of</p>
              <div className="progress-bar bg-gray-200 h-1 w-full mb-2">
                <div className="bg-green-500 h-1 w-1/2"></div>
              </div>
              <button className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 mt-2">
                Last updated by User
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#" className="text-pink-600 text-sm">See more...</a>
        </div>
      </section>

      {/* What Mitra Offers */}
      <section className="mitra-offers py-8 px-4">
        <h2 className="text-xl font-medium text-center mb-6">What Mitra offers?</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="feature-card bg-gray-200 p-4 rounded-lg flex items-start">
            <span className="icon mr-3">❤️</span>
            <p className="text-sm">Starting a fundraiser on some/my NM is absolutely free.</p>
          </div>

          <div className="feature-card bg-gray-200 p-4 rounded-lg flex items-start">
            <span className="icon mr-3">🚚</span>
            <p className="text-sm">24/7 assistance from dedicated fundraiser managers throughout your fundraising journey.</p>
          </div>

          <div className="feature-card bg-gray-200 p-4 rounded-lg flex items-start">
            <span className="icon mr-3">💰</span>
            <p className="text-sm">We accept donations in multiple currencies from anywhere in the world.</p>
          </div>

          <div className="feature-card bg-gray-200 p-4 rounded-lg flex items-start">
            <span className="icon mr-3">⬅️</span>
            <p className="text-sm">You can withdraw funds at any point during the course of your fundraiser.</p>
          </div>

          <div className="feature-card bg-gray-200 p-4 rounded-lg flex items-start">
            <span className="icon mr-3">💬</span>
            <p className="text-sm">Get instant updates on your fundraising progress on a real-time dashboard.</p>
          </div>

          <div className="feature-card bg-gray-200 p-4 rounded-lg flex items-start">
            <span className="icon mr-3">💳</span>
            <p className="text-sm">Accepts donations all cards, netbanking, UPI and online wallets.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-8 pb-4">
        <div className="footer-content flex justify-between px-8 pb-8">
          <div className="footer-col">
            <h3 className="text-pink-600 mb-4 text-sm">Mitra</h3>
            <ul className="text-xs space-y-2 text-gray-600">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Others</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <button className="bg-pink-600 text-white rounded-full px-3 py-1 text-xs mt-4">
              Create
            </button>
          </div>

          <div className="footer-col">
            <h3 className="text-gray-700 mb-4 text-sm">Office address</h3>
            <p className="text-xs text-gray-600 mb-4">
              234 ABC Colony,<br />
              XYZ Street<br />
              City Name<br />
              State<br />
              Country<br />
              ZIP: 123456
            </p>
            <h3 className="text-gray-700 mb-2 text-sm">Contact Us</h3>
            <p className="text-xs text-gray-600">
              Support: 1234567890<br />
              Email: support@mitra.org
            </p>
          </div>

          <div className="footer-col">
            <h3 className="text-pink-600 mb-4 text-sm">Support</h3>
            <ul className="text-xs space-y-2 text-gray-600">
              <li><a href="#">Help</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">More tools</a></li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-600 mb-2">Find us on</p>
              <div className="social-icons flex space-x-2">
                <a href="#" className="text-xs">FB</a>
                <a href="#" className="text-xs">IG</a>
                <a href="#" className="text-xs">TW</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <button className="bg-pink-600 text-white rounded-full px-4 py-2 text-sm">
              Give. Change. Inspire.
            </button>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
          <span>Contact</span>
          <span className="ml-2">💬</span>
        </div>

        <div className="footer-bottom border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
          <p>© 2024 Mitra. All rights reserved. | Privacy & Policy | Contact Us</p>
        </div>
      </footer>
    </div>
  );
}

export default About;