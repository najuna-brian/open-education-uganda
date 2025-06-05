import React, { useState } from 'react';
import './Terms.css';
import { FaBalanceScale, FaGavel, FaExclamationTriangle, FaQuestionCircle } from 'react-icons/fa';
import { FaUserLock, FaFileAlt, FaCopyright } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Terms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const termsSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FaQuestionCircle className="terms-icon" />,
      content: (
        <div>
          <p>
            Welcome to Open Education Uganda ("we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service").
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
          </p>
          <p>
            Our Service allows users to access educational resources from Ugandan universities. The Service is available to all users without discrimination.
          </p>
        </div>
      )
    },
    {
      id: 'accounts',
      title: 'Accounts',
      icon: <FaUserLock className="terms-icon" />,
      content: (
        <div>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are solely responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account and password</li>
            <li>All activities that occur under your account</li>
            <li>Immediately notifying us of any unauthorized use of your account</li>
          </ul>
          <p>
            We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
          </p>
        </div>
      )
    },
    {
      id: 'content',
      title: 'Content',
      icon: <FaFileAlt className="terms-icon" />,
      content: (
        <div>
          <p>
            Our Service allows you to access educational content ("Content"). You understand that:
          </p>
          <ul>
            <li>All Content is provided for educational purposes only</li>
            <li>We do not guarantee the accuracy, completeness, or usefulness of any Content</li>
            <li>You are solely responsible for verifying any information before relying on it</li>
          </ul>
          <p>
            By submitting Content to our Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and distribute the Content.
          </p>
        </div>
      )
    },
    {
      id: 'prohibited',
      title: 'Prohibited Uses',
      icon: <FaExclamationTriangle className="terms-icon" />,
      content: (
        <div>
          <p>
            You agree not to use the Service:
          </p>
          <ul>
            <li>For any unlawful purpose or to violate any laws</li>
            <li>To harass, abuse, or harm others</li>
            <li>To impersonate any person or entity</li>
            <li>To upload or transmit viruses or malicious code</li>
            <li>To interfere with or disrupt the Service</li>
            <li>To collect or track personal information of others</li>
            <li>For any commercial purposes without our express written consent</li>
          </ul>
          <p>
            We reserve the right to terminate your use of the Service for violating any of these prohibited uses.
          </p>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <FaCopyright className="terms-icon" />,
      content: (
        <div>
          <p>
            The Service and its original content, features, and functionality are owned by Open Education Uganda and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
          </p>
          <p>
            Educational materials provided by universities remain the property of their respective owners and are used under appropriate licenses or permissions.
          </p>
        </div>
      )
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      icon: <FaExclamationTriangle className="terms-icon" />,
      content: (
        <div>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Open Education Uganda makes no representations or warranties of any kind, express or implied, as to:
          </p>
          <ul>
            <li>The operation of the Service</li>
            <li>The accuracy or completeness of the Content</li>
            <li>The suitability of the Content for any particular purpose</li>
          </ul>
          <p>
            You expressly agree that your use of the Service is at your sole risk. We disclaim all warranties, express or implied, including implied warranties of merchantability and fitness for a particular purpose.
          </p>
        </div>
      )
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      icon: <FaBalanceScale className="terms-icon" />,
      content: (
        <div>
          <p>
            In no event shall Open Education Uganda, nor its directors, employees, partners, or affiliates, be liable for:
          </p>
          <ul>
            <li>Any indirect, incidental, special, or consequential damages</li>
            <li>Any loss of profits, data, use, goodwill, or other intangible losses</li>
            <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
          </ul>
          <p>
            This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis.
          </p>
        </div>
      )
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: <FaGavel className="terms-icon" />,
      content: (
        <div>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>
          <p>
            Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to the new Terms, you must stop using the Service.
          </p>
          <p>
            Material changes to these Terms will be effective 30 days after notice is posted on the Service.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="hero-content">
          <h1>Terms of Service</h1>
          <p className="hero-text">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="terms-intro">
        <div className="container">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Open Education Uganda website (the "Service") operated by Open Education Uganda ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
        </div>
      </section>

      <section className="terms-sections">
        <div className="container">
          {termsSections.map((section) => (
            <div 
              key={section.id} 
              className={`terms-section ${activeSection === section.id ? 'active' : ''}`}
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

      <section className="terms-contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>Email: legal@openeducationuganda.org</li>
            <li>Phone: +256 123 456 789</li>
            <li>Address: 123 Education Road, Kampala, Uganda</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Terms;
