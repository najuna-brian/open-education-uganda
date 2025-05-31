// src/components/Breadcrumb.js
import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ path, onNavigate, rootName }) => {
  // Path is an array of item objects
  if (!path) {
    return null;
  }

  const handleNav = (index) => {
    if (index === -1) { // Navigate to root
      onNavigate([]);
    } else {
      onNavigate(path.slice(0, index + 1));
    }
  };

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <button onClick={() => handleNav(-1)} className="breadcrumb-link">
            {rootName || 'Home'}
          </button>
        </li>
        {path.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index < path.length - 0 ? ( // All items in path are clickable
              <button onClick={() => handleNav(index)} className="breadcrumb-link">
                {item.name}
              </button>
            ) : (
              // This case might not be hit if all are links, but kept for safety
              <span className="breadcrumb-current" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;