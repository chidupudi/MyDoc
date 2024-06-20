// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Us Section */}
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>Email: mydoc@gmail.com</p>
          <p>Phone: 1800-80080-916916</p>
        </div>

        {/* Our Services Section */}
        <div className="footer-section our-services">
          <h3>Our Services</h3>
          <ul>
            <li>Instant Video Consultation</li>
            <li>Basic Medical Advice</li>
            <li>Lab Test At Your Doorstep</li>
            <li>Find Doctors Near You</li>
            <li>Symptom Analyzer</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Emergency Button Section */}
      <div className="emergency-button">
        <button className="btn-emergency">Emergency</button>
      </div>
    </footer>
  );
};

export default Footer;
