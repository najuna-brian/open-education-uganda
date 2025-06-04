import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Open Education Uganda provides free access to quality educational resources for all Ugandan universities.</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> 123 Education Road, Kampala, Uganda</li>
            <li><FaPhone /> +256 123 456 789</li>
            <li><FaEnvelope /> info@openeducationuganda.org</li>
            <li><FaClock /> Mon-Fri: 8:00 AM - 5:00 PM</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Open Education Uganda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;