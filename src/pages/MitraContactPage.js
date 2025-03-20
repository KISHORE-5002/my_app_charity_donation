import React, { useState } from 'react';
import c3 from '../assests/c3.png';
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5'
  },
  header: {
    backgroundColor: '#4A339C',
    color: 'white',
    padding: '24px 16px'
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  headerTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: 0
  },
  headerSubtitle: {
    marginTop: '8px',
    fontSize: '16px'
  },
  main: {
    flex: 1,
    padding: '32px 16px'
  },
  card: {
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardColumn: {
    padding: '32px 24px'
  },
  infoColumn: {
    backgroundColor: '#4A339C',
    color: 'white'
  },
  formColumn: {},
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  paragraph: {
    marginBottom: '16px',
    lineHeight: '1.6'
  },
  contactSection: {
    marginBottom: '32px'
  },
  contactHeading: {
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '16px'
  },
  contactInfo: {
    marginBottom: '4px'
  },
  form: {},
  formGroup: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  },
  radioGroup: {
    display: 'flex',
    gap: '16px'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center'
  },
  radioInput: {
    marginRight: '8px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    height: '100px',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif'
  },
  submitButton: {
    backgroundColor: '#9C3353',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    marginTop: '8px'
  },
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '24px 16px',
    textAlign: 'center'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  footerLinks: {
    marginTop: '12px'
  },
  footerLink: {
    color: '#93c5fd',
    margin: '0 8px',
    textDecoration: 'none'
  },
  successCard: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '32px',
    textAlign: 'center'
  },
  successIcon: {
    color: '#10b981',
    fontSize: '48px',
    marginBottom: '16px'
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  successMessage: {
    color: '#666',
    marginBottom: '24px'
  },
  successButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  // Media query styles applied through JavaScript
  desktop: {
    cardRow: {
      flexDirection: 'row'
    },
    cardColumn: {
      width: '50%'
    }
  }
};

const MitraContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    message: '',
    donationType: 'one-time'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Check for desktop size on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  // Apply desktop styles conditionally
  const applyStyles = (baseStyle, key) => {
    if (isDesktop && styles.desktop[key]) {
      return { ...baseStyle, ...styles.desktop[key] };
    }
    return baseStyle;
  };

  if (submitted) {
    return (
      <div style={{ ...styles.container, justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '64px', height: '64px', margin: '0 auto' }}>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 style={styles.successTitle}>Thank You!</h2>
          <p style={styles.successMessage}>
            Your donation information has been received. We'll be in touch soon regarding your generous contribution.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={styles.successButton}
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Hope Foundation</h1>
          <p style={styles.headerSubtitle}>Making a difference, one donation at a time</p>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.card}>
          <div style={applyStyles(styles.cardRow, 'cardRow')}>

            <div style={{...applyStyles(styles.cardColumn, 'cardColumn'), ...styles.infoColumn}}>
              <h2 style={styles.heading}>Your Support Matters</h2>

              <p style={styles.paragraph}>Every donation helps us continue our mission to create positive change in communities worldwide.</p>

              <div style={styles.contactSection}>
                <h3 style={styles.contactHeading}>Contact Information:</h3>
                <p style={styles.contactInfo}>123 Charity Lane</p>
                <p style={styles.contactInfo}>New York, NY 10001</p>
                <p style={styles.contactInfo}>contact@hopefoundation.org</p>
                <p style={styles.contactInfo}>(555) 123-4567</p>
              </div>

              <div>
                <h3 style={styles.contactHeading}>Tax Information:</h3>
                <p>Hope Foundation is a 501(c)(3) organization. All donations are tax-deductible.</p>
              </div>
            </div>

            <div style={applyStyles(styles.cardColumn, 'cardColumn')}>
              <h2 style={styles.heading}>Make a Donation</h2>
              <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="name">
                    Full Name
                  </label>
                  <input
                    style={styles.input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    style={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    style={styles.input}
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Donation Type
                  </label>
                  <div style={styles.radioGroup}>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="donationType"
                        value="one-time"
                        checked={formData.donationType === 'one-time'}
                        onChange={handleChange}
                        style={styles.radioInput}
                      />
                      One-time
                    </label>
                    <label style={styles.radioLabel}>
                      <input
                        type="radio"
                        name="donationType"
                        value="monthly"
                        checked={formData.donationType === 'monthly'}
                        onChange={handleChange}
                        style={styles.radioInput}
                      />
                      Monthly
                    </label>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="amount">
                    Donation Amount ($)
                  </label>
                  <input
                    style={styles.input}
                    id="amount"
                    name="amount"
                    type="number"
                    min="1"
                    placeholder="100"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="message">
                    Message (Optional)
                  </label>
                  <textarea
                    style={styles.textarea}
                    id="message"
                    name="message"
                    placeholder="Share why you're donating or any special instructions..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  style={styles.submitButton}
                  type="submit"
                >
                  Submit Donation
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>© 2025 Hope Foundation. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Terms of Service</a>
            <a href="#" style={styles.footerLink}>Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MitraContactPage;