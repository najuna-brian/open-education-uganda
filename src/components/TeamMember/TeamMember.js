import React from 'react';
import './TeamMember.css';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <div className="member-avatar">{member.avatar}</div>
      <h3>{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p className="member-bio">{member.bio}</p>
    </div>
  );
};

export default TeamMember;