import React from 'react';
import './About.css';
import TeamMember from '../components/TeamMember/TeamMember';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Kintu",
      role: "Founder & Director",
      bio: "Education specialist with 15 years of experience in curriculum development.",
      avatar: "👩🏾‍💼"
    },
    {
      id: 2,
      name: "James Mwesigwa",
      role: "Technical Lead",
      bio: "Software engineer passionate about making education accessible through technology.",
      avatar: "👨🏾‍💻"
    },
    {
      id: 3,
      name: "Grace Nakimera",
      role: "Content Manager",
      bio: "Former university lecturer dedicated to curating high-quality educational materials.",
      avatar: "👩🏾‍🏫"
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Open Education Uganda</h1>
          <p className="hero-text">Our mission is to democratize access to quality education across Uganda</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Open Education Uganda was founded in 2020 with the goal of breaking down barriers to education. 
            We believe every Ugandan student deserves access to high-quality learning resources, regardless 
            of their institution or financial situation.
          </p>
          <p>
            Through partnerships with universities, educators, and technology experts, we've built a platform 
            that brings together the best educational content from across the country.
          </p>
        </div>
        <div className="mission-image">
          {/* This would be an image in a real implementation */}
          <div className="image-placeholder">📚</div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>3+</h3>
            <p>Years of Service</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Partner Institutions</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Contributors</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;