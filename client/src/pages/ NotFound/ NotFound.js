import React from 'react';
import { useNavigate } from 'react-router-dom';
import './non.css'

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    try {
      navigate('/');
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return (
    <div className="not-found-container" role="main">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        className="not-found-button"
        onClick={handleNavigation}
        aria-label="Go to home page"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
