// src/components/MaterialItem.js
import React from 'react';
import './MaterialItem.css'; // We'll create this CSS file

// Helper function to get an icon based on file type
const getFileIcon = (fileType) => {
  switch (fileType?.toLowerCase()) {
    case 'pdf':
      return '📄'; // Simple document icon
    case 'doc':
    case 'docx':
      return '📃'; // Word document icon
    case 'ppt':
    case 'pptx':
      return '📊'; // Presentation icon
    case 'xls':
    case 'xlsx':
      return '📈'; // Spreadsheet icon
    case 'video':
    case 'mp4':
      return '🎬'; // Video icon
    case 'audio':
    case 'mp3':
      return '🎵'; // Audio icon
    case 'quiz':
      return '❓'; // Quiz icon
    case 'zip':
    case 'rar':
      return '📦'; // Archive icon
    default:
      return '🔗'; // Generic link/file icon
  }
};


const MaterialItem = ({ material }) => {
  if (!material) return null;

  return (
    <li className="material-item">
      <a href={material.url || '#'} className="material-link" target="_blank" rel="noopener noreferrer" title={`Download ${material.title}`}>
        <span className="material-icon">{getFileIcon(material.fileType)}</span>
        <span className="material-title">{material.title}</span>
        {material.size && <span className="material-size">({material.size})</span>}
      </a>
      {material.uploadDate && <span className="material-date">Uploaded: {material.uploadDate}</span>}
      {/* Add more actions if needed, e.g., preview button */}
    </li>
  );
};

export default MaterialItem;