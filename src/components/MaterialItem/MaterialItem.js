import React from 'react';
import './MaterialItem.css';

const MaterialItem = ({ material }) => {
  if (!material) return null;

  const getFileIcon = (fileType) => {
    switch (fileType?.toLowerCase()) {
      case 'pdf': return '📄';
      case 'doc': case 'docx': return '📃';
      case 'ppt': case 'pptx': return '📊';
      case 'xls': case 'xlsx': return '📈';
      case 'video': case 'mp4': return '🎬';
      case 'audio': case 'mp3': return '🎵';
      case 'quiz': return '❓';
      case 'zip': case 'rar': return '📦';
      default: return '🔗';
    }
  };

  return (
    <li className="material-item">
      <a href={material.url || '#'} className="material-link" target="_blank" rel="noopener noreferrer" title={`Download ${material.title}`}>
        <span className="material-icon">{getFileIcon(material.fileType)}</span>
        <span className="material-title">{material.title}</span>
        {material.size && <span className="material-size">({material.size})</span>}
      </a>
      {material.uploadDate && <span className="material-date">Uploaded: {material.uploadDate}</span>}
    </li>
  );
};

export default MaterialItem;