import React from 'react';

const ProgressBarComponent = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}>
          <span className="progress-text">{Math.round(percentage)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
