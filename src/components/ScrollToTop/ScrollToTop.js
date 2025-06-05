import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { FaArrowUp, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  return (
    <div className="scroll-container">
      {isVisible && (
        <>
          <button onClick={goBack} className="nav-arrow back" title="Go Back">
            <FaArrowLeft />
          </button>
          <button onClick={goForward} className="nav-arrow forward" title="Go Forward">
            <FaArrowRight />
          </button>
          <button onClick={scrollToTop} className="scroll-to-top" title="Back to Top">
            <FaArrowUp />
          </button>
        </>
      )}
    </div>
  );
};

export default ScrollToTop;