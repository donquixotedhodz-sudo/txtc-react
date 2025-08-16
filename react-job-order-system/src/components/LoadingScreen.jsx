import React from 'react';

const LoadingScreen = ({ show, progress }) => {
  if (!show) return null;

  return (
    <div className={`loading-screen ${show ? 'active' : ''}`}>
      <div className="snowflake-loader">
        <i className="fas fa-snowflake"></i>
      </div>
      <div className="loading-text">Loading Dashboard...</div>
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;