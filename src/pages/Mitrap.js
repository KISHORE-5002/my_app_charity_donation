import React, { useState } from 'react';
import './Mitrap.css';

// Icons for payment methods
import visa from '../assests/visa.png';
import mastercard from '../assests/mastercard.png';
import amex from '../assests/amex.png';
import gpa from '../assests/google-pay.png';
import apple from '../assests/apple-pay.png';
import paypal from '../assests/paypal.png';
import Logo from '../assests/img.png';

const Mitrap = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-header">
          <h1>Payment</h1>
        </div>

        <div className="payment-body">
          <h2>Payment Methods</h2>

          <div className="payment-option">
            <label className="radio-container">
              <input
                type="radio"
                name="paymentMethod"
                checked={paymentMethod === 'pay'}
                onChange={() => handlePaymentMethodChange('pay')}
              />
              <span className="radio-custom"></span>
              <div className="option-details">
                <span className="option-title">Pay</span>
                <span className="option-subtitle">Contribute</span>
              </div>
            </label>
          </div>

          <div className="payment-option">
            <label className="radio-container">
              <input
                type="radio"
                name="paymentMethod"
                checked={paymentMethod === 'credit'}
                onChange={() => handlePaymentMethodChange('credit')}
              />
              <span className="radio-custom"></span>
              <div className="option-details">
                <span className="option-title">Credit/Debit Cards</span>
                <span className="option-subtitle">Pay with your Credit / Debit Card</span>
              </div>
            </label>
            <div className="payment-icons">
              <img src={visa} alt="Visa" className="payment-icon" />
              <img src={mastercard} alt="Mastercard" className="payment-icon" />
              <img src={amex} alt="American Express" className="payment-icon" />
            </div>
          </div>

          {paymentMethod === 'credit' && (
            <div className="card-details">
              <div className="form-group">
                <input type="text" placeholder="Card number" className="card-input" />
                <span className="card-icon">
                  <i className="fa fa-credit-card"></i>
                </span>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <input type="text" placeholder="MM / YY" className="card-input" />
                  <span className="card-icon">
                    <i className="fa fa-calendar"></i>
                  </span>
                </div>
                <div className="form-group half">
                  <input type="text" placeholder="CVV" className="card-input" />
                  <span className="card-icon">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="payment-option">
            <label className="radio-container">
              <input
                type="radio"
                name="paymentMethod"
                checked={paymentMethod === 'bank'}
                onChange={() => handlePaymentMethodChange('bank')}
              />
              <span className="radio-custom"></span>
              <div className="option-details">
                <span className="option-title">Direct Bank Transfer</span>
                <span className="option-subtitle">Make payment directly through bank account.</span>
              </div>
            </label>
          </div>

          <div className="payment-option">
            <label className="radio-container">
              <input
                type="radio"
                name="paymentMethod"
                checked={paymentMethod === 'other'}
                onChange={() => handlePaymentMethodChange('other')}
              />
              <span className="radio-custom"></span>
              <div className="option-details">
                <span className="option-title">Other Payment Methods</span>
                <span className="option-subtitle">Make payment through Gpay, Paypal, Paytm etc</span>
              </div>
            </label>
            <div className="payment-icons">
              <img src={gpa} alt="Google Pay" className="payment-icon" />
              <img src={paypal} alt="PayPal" className="payment-icon" />
              <img src={apple} alt="Apple Pay" className="payment-icon" />
            </div>
          </div>
        </div>

        <div className="payment-footer">
          <button className="btn btn-back">Back</button>
          <button className="btn btn-contribute">Contribute</button>
        </div>
      </div>
    </div>
  );
};

export default Mitrap;