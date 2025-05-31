// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import MaterialItem from './MaterialItem'; // We'll create this

const MainContent = ({ selectedItem, currentPath, onItemSelect }) => {
  if (!selectedItem) {
    return <div className="main-content-area"><p>Select an item from the sidebar.</p></div>;
  }

  // Helper to get children for the current selectedItem
  const getChildrenList = (item) => {
    if (!item) return null;
    switch (item.type) {
      case 'root':
        return item.colleges;
      case 'college':
        return item.departments;
      case 'department':
        return item.programs;
      case 'program':
        return item.years;
      case 'year':
        return item.semesters;
      case 'semester':
        return item.courses;
      case 'course':
        return item.materialTypes; // Display material types
      default:
        return null;
    }
  };

  const childrenToDisplay = getChildrenList(selectedItem);

  // Function to handle clicks on items within MainContent (e.g., clicking a department card)
  const handleContentItemClick = (childItem) => {
    const newPath = [...currentPath, childItem];
    onItemSelect(newPath); // onItemSelect expects the full new path
  };
  
  // Function to handle clicks on MaterialType (e.g., clicking "Study Notes")
  // This doesn't change the main path but could show/hide materials or navigate to a material view
  const handleMaterialTypeClick = (materialTypeItem) => {
    // For now, we'll just log it. In a real app, this might expand to show materials.
    // Or, if we want to add materialType to path:
    // const newPath = [...currentPath, materialTypeItem];
    // onItemSelect(newPath);
    console.log("Selected Material Type:", materialTypeItem.name);
    // Potentially set a new state to display materials for this type
  };


  return (
    <div className="main-content-area">
      <h2 className="content-title">{selectedItem.name}</h2>
      
      {selectedItem.description && (
        <p className="content-description">{selectedItem.description}</p>
      )}

      {/* If the selected item is a COURSE, display its material types */}
      {selectedItem.type === 'course' && selectedItem.materialTypes && (
        <div className="material-types-section">
          <h3 className="section-subtitle">Learning Materials</h3>
          {selectedItem.materialTypes.map((materialType, index) => (
            <div key={index} className="material-type-block">
              <h4 className="material-type-title" onClick={() => handleMaterialTypeClick(materialType)}>
                {materialType.name} ({materialType.materials ? materialType.materials.length : 0})
              </h4>
              {materialType.materials && materialType.materials.length > 0 ? (
                <ul className="materials-list">
                  {materialType.materials.map((material) => (
                    <MaterialItem key={material.id} material={material} />
                  ))}
                </ul>
              ) : (
                <p className="no-materials-text">No materials available for this type.</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* If childrenToDisplay exists and it's NOT material types (handled above) */}
      {childrenToDisplay && selectedItem.type !== 'course' && (
        <div className="content-grid">
          {childrenToDisplay.map((child, index) => (
            <div key={index} className="content-card" onClick={() => handleContentItemClick(child)} role="button" tabIndex={0}>
              <h3 className="card-title">{child.name}</h3>
              {/* You can add more details to the card, e.g., number of sub-items */}
              {child.description && <p className="card-description">{child.description}</p>}
              <span className="card-type-indicator">{child.type}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* If no children to display and not a course (which has its own material display logic) */}
      {!childrenToDisplay && selectedItem.type !== 'course' && selectedItem.type !== 'root' && (
         <p className="no-content-text">No further sub-categories or details available for {selectedItem.name}.</p>
      )}

    </div>
  );
};

export default MainContent;