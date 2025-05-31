// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

// Helper to get a unique key for list items
const getItemKey = (item, level) => `${level}-${item.name.replace(/\s+/g, '-')}`;

// Recursive component to render each item in the sidebar
const SidebarItem = ({ item, level = 0, onPathSelected, currentPathForSiblings }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine what children an item might have
  const getChildren = (currentItem) => {
    if (currentItem.colleges) return currentItem.colleges;
    if (currentItem.departments) return currentItem.departments;
    if (currentItem.programs) return currentItem.programs;
    if (currentItem.years) return currentItem.years;
    if (currentItem.semesters) return currentItem.semesters;
    if (currentItem.courses) return currentItem.courses;
    // We generally don't navigate further than courses in the sidebar for this design
    // MaterialTypes are usually handled in MainContent
    return [];
  };

  const children = getChildren(item);
  const hasChildren = children.length > 0;

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling to parent items
    
    // Construct the new path for this item
    // currentPathForSiblings represents the path *to* the parent of this item
    const newPath = [...currentPathForSiblings, item];
    onPathSelected(item, newPath); // Notify App of the selection

    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="sidebar-item-container">
      <div
        onClick={handleToggle}
        className={`sidebar-item level-${level} ${hasChildren ? 'expandable' : ''} ${isExpanded ? 'expanded' : ''}`}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(e);}} // Accessibility
        title={item.name}
      >
        {hasChildren && (
          <span className="toggle-icon">{isExpanded ? '▼' : '►'}</span>
        )}
        <span className="item-name">{item.name}</span>
      </div>
      {isExpanded && hasChildren && (
        <div className="sidebar-item-children">
          {children.map((childItem) => (
            <SidebarItem
              key={getItemKey(childItem, level + 1)}
              item={childItem}
              level={level + 1}
              onPathSelected={onPathSelected}
              currentPathForSiblings={[...currentPathForSiblings, item]} // Path to the current item (parent of children)
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Sidebar component
const Sidebar = ({ data, onPathSelected }) => {
  if (!data) {
    return <aside className="sidebar"><p>Loading structure...</p></aside>;
  }

  return (
    <aside className="sidebar">
      <h1 className="sidebar-main-title">{data.name}</h1>
      <nav>
        {/* Starting with colleges, or directly with children if data is the root */}
        {(data.colleges || []).map((college) => (
          <SidebarItem
            key={getItemKey(college, 0)}
            item={college}
            level={0}
            onPathSelected={onPathSelected}
            currentPathForSiblings={[]} // Root items have an empty path to their parent
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;