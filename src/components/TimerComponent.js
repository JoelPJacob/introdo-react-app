import React, { useState, useEffect } from 'react';
import ProgressBarComponent from './ProgressBarComponent';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0); // start from 0 seconds
  const totalSeconds = 3600; // 60 minutes * 60 seconds = 3600 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev < 3599 ? prev + 1 : 3599)); // Stop at 14:59
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // Calculate minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Format time as 14:XX
  const formattedTime = `14:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;

  // Progress calculation (percentage of the total time, 0-3599 seconds)
  const progressPercentage = (seconds / totalSeconds) * 100;

  return (
    <div className="timer-container">
      <h2>Hours Worked</h2>
      <p className="hours-worked">{formattedTime}</p>
      <ProgressBarComponent percentage={progressPercentage} />
    </div>
  );
};

export default TimerComponent;
