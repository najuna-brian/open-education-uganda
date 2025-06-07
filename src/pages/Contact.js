import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page"
    style={{
        background: `linear-gradient(rgba(0, 31, 63, 0.89), rgba(0, 31, 63, 0.91)), url("/Assets/Image28.jpg") center/cover no-repeat`
      }}
    >
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p className="hero-text">We'd love to hear from you! Reach out with questions, suggestions, or partnership inquiries.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>Muganzi Awongererwa Rd, Kampala</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+256 774 948 086</p>
                <p>+256 200 981 445</p>
                <p>+256 394 827 687</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>openeducationuganda@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <h3>Working Hours</h3>
                <p>Website is Open 24/7</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container"
          style={{
        background: `linear-gradient(rgba(0, 31, 63, 0.89), rgba(0, 31, 63, 0.91)), url("/Assets/Image44.jpg") center/cover no-repeat`
      }}
          >
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section class="map-section" data-aos="fade-up">
  <div class="container">
    <div class="map-container animated-map">
      <h2>Our Location</h2>
      <div class="map-embed-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536223157963!2d32.5710316!3d0.3384618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb19d164ea2d%3A0x46bf437b2b38b7a9!2sNahati%20Anytime%20Laundry!5e0!3m2!1sen!2sug!4v1717654900000!5m2!1sen!2sug"
          width="100%" 
          height="450" 
          style={{ border: 0 }}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Contact;