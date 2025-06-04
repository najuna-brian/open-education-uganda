import React, { useState } from 'react';
import './Sidebar.css';

const getItemKey = (item, level) => `${level}-${item.name.replace(/\s+/g, '-')}`;

const SidebarItem = ({ item, level = 0, onPathSelected, currentPathForSiblings = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getChildren = (currentItem) => {
    if (currentItem.colleges) return currentItem.colleges;
    if (currentItem.departments) return currentItem.departments;
    if (currentItem.programs) return currentItem.programs;
    if (currentItem.years) return currentItem.years;
    if (currentItem.semesters) return currentItem.semesters;
    if (currentItem.courses) return currentItem.courses;
    return [];
  };

  const children = getChildren(item);
  const hasChildren = children.length > 0;

  const handleToggle = (e) => {
    e.stopPropagation();
    const newPath = [...currentPathForSiblings, item];
    
    // Make sure onPathSelected exists before calling it
    if (typeof onPathSelected === 'function') {
      onPathSelected(item, newPath);
    }

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
        onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(e); }}
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
              currentPathForSiblings={[...currentPathForSiblings, item]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ data, onPathSelected, currentPathForSiblings }) => {
  if (!data) {
    return <aside className="sidebar"><p>Loading structure...</p></aside>;
  }

  return (
    <aside className="sidebar">
      <h1 className="sidebar-main-title">{data.name}</h1>
      <nav>
        {(data.colleges || []).map((college) => (
          <SidebarItem
            key={getItemKey(college, 0)}
            item={college}
            level={0}
            onPathSelected={onPathSelected}
            currentPathForSiblings={currentPathForSiblings || []}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;