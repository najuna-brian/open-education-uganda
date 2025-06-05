import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import academicStructureData from './data/academic-structure.json';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState([]);
  const [selectedItem, setSelectedItem] = useState(academicStructureData);

  const handlePathSelected = (item, path) => {
    setCurrentPath(path);
    setSelectedItem(item);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={
              <>
                <Sidebar 
                  data={academicStructureData} 
                  onPathSelected={handlePathSelected}
                  currentPathForSiblings={[]}
                />
                <MainContent 
                  selectedItem={selectedItem} 
                  currentPath={currentPath} 
                  onItemSelect={handlePathSelected}
                />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;