import React, { useState } from 'react';
import './LatestNews.css';
import { Data } from './Data';

const LatestNews = () => {
  // Sample notification data
  

  const [showAll, setShowAll] = useState(false);
  const [notifications] = useState(Data);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleBack = () => {
    setShowAll(false);
  };

  return (
    <div className="latest-news-container">
      <h1>LATEST NEWS</h1>
      <div className="notifications-container">
        {notifications.map((notification, index) => {
          // Display all notifications when showAll is true, otherwise display the first two
          if (showAll || index < 2) {

            return (
              <div className="updateBox">
                <div className="dateTimeContainer">
                  <div className="dateDiv">{notification.date}</div>
                  <div className="monYear">
                    <div className="monthDiv">{notification.month}</div>
                    <div className="yearDiv">{notification.year}</div>
                </div>
                </div>
                <div className="content">{notification.content}</div>
              </div>
              
              
            );
          }
          return null; // Skip rendering if not within the limit
        })}
      </div>
      {!showAll ? (
        <button className="show-all-button" onClick={handleShowAll}>
          Show All
        </button>
      ) : (
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      )}
    </div>
  );
};

export default LatestNews;
