import React, { useState } from 'react';
import './Privacy.css';
import { FaShieldAlt, FaUserLock, FaDatabase, FaCookieBite } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const privacySections = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: <FaDatabase className="privacy-icon" />,
      content: (
        <div>
          <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
          <ul>
            <li><strong>Information you provide:</strong> When you create an account, we ask for personal information like your name, email address, and institutional affiliation.</li>
            <li><strong>Information we get from your use of our services:</strong> We collect information about the services you use and how you use them, including:</li>
            <ul>
              <li>Device information (type, operating system, browser)</li>
              <li>Log information (IP address, access times, pages viewed)</li>
              <li>Location information (country, city based on IP)</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </ul>
        </div>
      )
    },
    {
      id: 'data-use',
      title: 'How We Use Data',
      icon: <FaUserLock className="privacy-icon" />,
      content: (
        <div>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li><strong>Provide and improve our services:</strong> To deliver personalized educational content and develop new features.</li>
            <li><strong>Maintain security:</strong> To detect and prevent fraud, abuse, and security issues.</li>
            <li><strong>Communicate with you:</strong> To send important notices like changes to our terms or privacy policy.</li>
            <li><strong>Research and development:</strong> To understand usage patterns and improve our platform.</li>
            <li><strong>Legal compliance:</strong> To meet any applicable laws, regulations, or legal processes.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      icon: <FaShieldAlt className="privacy-icon" />,
      content: (
        <div>
          <p>We do not share personal information with companies, organizations, or individuals outside of Open Education Uganda except in the following cases:</p>
          <ul>
            <li><strong>With your consent:</strong> We will share personal information with third parties when we have your explicit consent.</li>
            <li><strong>For external processing:</strong> We provide information to our affiliates or other trusted businesses to process it for us, based on our instructions and in compliance with our Privacy Policy.</li>
            <li><strong>For legal reasons:</strong> We will share information if we believe in good faith that access, use, preservation, or disclosure is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
          </ul>
          <p>We may share aggregated, non-personally identifiable information publicly and with our partners.</p>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: <FaCookieBite className="privacy-icon" />,
      content: (
        <div>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Remember your preferences and settings</li>
            <li>Analyze how our services are performing</li>
            <li>Deliver and measure the effectiveness of content</li>
            <li>Provide relevant advertising (non-personalized)</li>
          </ul>
          <p>You can set your browser to refuse all or some browser cookies, but this may affect your user experience.</p>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: <FaUserLock className="privacy-icon" />,
      content: (
        <div>
          <p>You have rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> You can request deletion of your personal data in certain circumstances.</li>
            <li><strong>Objection:</strong> You can object to processing of your personal data.</li>
            <li><strong>Restriction:</strong> You can request restriction of processing in certain cases.</li>
            <li><strong>Portability:</strong> You can request transfer of your data to another service provider.</li>
          </ul>
          <p>To exercise these rights, please contact us at privacy@openeducationuganda.org.</p>
        </div>
      )
    }
  ];

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p className="hero-text">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="privacy-intro">
        <div className="container">
          <p>
            Open Education Uganda ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
          <p>
            By accessing or using our service, you agree to the collection and use of information in accordance with this policy. If you disagree with any part of this policy, please do not use our services.
          </p>
        </div>
      </section>

      <section className="privacy-sections">
        <div className="container">
          {privacySections.map((section) => (
            <div 
              key={section.id} 
              className={`privacy-section ${activeSection === section.id ? 'active' : ''}`}
            >
              <div 
                className="section-header"
                onClick={() => toggleSection(section.id)}
              >
                <div className="section-title">
                  {section.icon}
                  <h2>{section.title}</h2>
                </div>
                {activeSection === section.id ? (
                  <IoMdArrowDropup className="toggle-icon" />
                ) : (
                  <IoMdArrowDropdown className="toggle-icon" />
                )}
              </div>
              <div className="section-content">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="privacy-contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: privacy@openeducationuganda.org</li>
            <li>Phone: +256 123 456 789</li>
            <li>Address: 123 Education Road, Kampala, Uganda</li>
          </ul>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;