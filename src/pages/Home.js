import React, { useState, useEffect } from 'react';
import './Home.css';
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Open Education Uganda</h1>
          <p className="hero-text">Access free educational resources for all Ugandan universities</p>
          <div className="hero-buttons">
            <button className="primary-button">Explore Resources</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Open Education Uganda?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Comprehensive Resources</h3>
            <p>Access to a wide range of educational materials from all major Ugandan universities.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Digital Accessibility</h3>
            <p>All resources available online, accessible anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🆓</div>
            <h3>Completely Free</h3>
            <p>No hidden charges or subscription fees for our educational resources.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Users Say</h2>
        <TestimonialSlider />
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Universities</p>
          </div>
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Courses</p>
          </div>
          <div className="stat-item">
            <h3>100,000+</h3>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Resources</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;