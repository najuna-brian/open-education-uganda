import React from 'react';
import './MainContent.css';
import MaterialItem from '../MaterialItem/MaterialItem';

const MainContent = ({ selectedItem, currentPath, onItemSelect }) => {
  if (!selectedItem) {
    return <div className="main-content-area"><p>Select an item from the sidebar.</p></div>;
  }

  const getChildrenList = (item) => {
    if (!item) return null;
    switch (item.type) {
      case 'root': return item.colleges;
      case 'college': return item.departments;
      case 'department': return item.programs;
      case 'program': return item.years;
      case 'year': return item.semesters;
      case 'semester': return item.courses;
      case 'course': return item.materialTypes;
      default: return null;
    }
  };

  const childrenToDisplay = getChildrenList(selectedItem);

  const handleContentItemClick = (childItem) => {
    const newPath = [...currentPath, childItem];
    if (typeof onItemSelect === 'function') {
      onItemSelect(childItem, newPath);
    }
  };

  const handleMaterialTypeClick = (materialTypeItem) => {
    console.log("Selected Material Type:", materialTypeItem.name);
  };

  return (
    <div className="main-content-area">
      <h2 className="content-title">{selectedItem.name}</h2>
      
      {selectedItem.description && (
        <p className="content-description">{selectedItem.description}</p>
      )}

      {/* Content rendering logic remains the same */}
      {/* ... */}
    </div>
  );
};

export default MainContent;