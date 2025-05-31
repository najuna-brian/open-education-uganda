// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import MainContent from './components/MainContent';
import academicStructureData from './data/academic-structure.json';
import './index.css'; // Global styles

function App() {
  const [currentPath, setCurrentPath] = useState([]); // Array of item objects forming the path
  const [selectedItem, setSelectedItem] = useState(academicStructureData); // Deepest selected item, initially root

  // Effect to set initial state based on root data
  useEffect(() => {
    setSelectedItem(academicStructureData); // Set root as initially selected
  }, []);


  // Handles selection from Sidebar or Breadcrumb
  const handleNavigation = (newPath) => {
    setCurrentPath(newPath);
    setSelectedItem(newPath.length > 0 ? newPath[newPath.length - 1] : academicStructureData);
  };
  
  // Specifically for sidebar clicks that might select an item and its path
  const handleSidebarSelect = (item, path) => {
    setCurrentPath(path);
    setSelectedItem(item);
  };


  return (
    <div className="app-container">
      <Sidebar
        data={academicStructureData}
        onPathSelected={handleSidebarSelect}
        currentPath={currentPath} // To highlight active path in sidebar (optional feature)
      />
      <main className="flex-1 p-4 bg-white shadow-md overflow-y-auto">
        <Breadcrumb path={currentPath} onNavigate={handleNavigation} rootName={academicStructureData.name} />
        <MainContent selectedItem={selectedItem} currentPath={currentPath} onItemSelect={handleNavigation} />
      </main>
    </div>
  );
}

export default App;