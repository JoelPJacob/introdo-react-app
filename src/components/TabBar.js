import React from 'react';
import './TabBar.css';

const TabBar = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="tab-container">
      {Object.keys(tabs).map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          style={{
            backgroundColor: activeTab === tab ? tabs[tab].selectedColor : 'white',
          }}
          onClick={() => onTabClick(tab)}
        >
          {tabs[tab].title}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
