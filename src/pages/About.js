import React from 'react';
import './About.css';

// Embedded TeamMember Component
const TeamMember = ({ member }) => {
  const { name, role, bio, avatar } = member;
  return (
    <div className="team-member">
      <div className="avatar">{avatar}</div>
      <div className="name">{name}</div>
      <div className="role">{role}</div>
      <div className="bio">{bio}</div>
    </div>
  );
};

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Najuna Brian",
      role: "Founder & Director",
      bio: "Medical School graduate and Software engineer with 7 years of experience in curriculum development.",
      avatar: "👩🏾‍💼"
    },
    {
      id: 2,
      name: "Jerry Laruba Festus",
      role: "Designer & Technical Lead",
      bio: "Architect and Software engineer passionate about making education accessible through technology.",
      avatar: "👨🏾‍💻"
    },
  ];

  return (
    <div
      className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Open Education Uganda</h1>
          <p className="hero-text">
            Our mission is to democratize access to quality education across Uganda
          </p>
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
          <div className="image-placeholder">📚</div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <h3>The Creative Minds Behind our Mission's Success!</h3>
        <div className="team-grid">
          {teamMembers.map(member => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section
        className="stats-section"
        style={{
          background: `linear-gradient(rgba(2, 44, 86, 0.8), rgba(0, 52, 104, 0.8)), url("/Assets/Image6.jpg") center/cover no-repeat`,
          animation: "footerBgScroll 12s ease-in-out infinite alternate",
        }}
      >
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
