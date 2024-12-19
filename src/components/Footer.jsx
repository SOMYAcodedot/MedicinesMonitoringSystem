import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic Year

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>Quality Monitoring System</h4>
          <p>
            Ensuring high-quality medicines and consumables in hospitals through automated testing and monitoring.
          </p>
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>Email: support@qualitymonitoring.com</p>
          <p>Phone: +91 7378570635</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Quality Monitoring System. @All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;