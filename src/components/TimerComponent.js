import React, { useState, useEffect } from 'react';
import ProgressBarComponent from './ProgressBarComponent';

const TimerComponent = ({ progressPercentage, setProgressPercentage }) => {
  const [seconds, setSeconds] = useState(0); // start from 0 seconds
  const totalSeconds = 3600; // 60 minutes * 60 seconds = 3600 seconds
  // const [progressPercentage, setProgressPercentage] = useState(0);
  // let progressPercentage=0;
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const updatedSeconds = prev < 58 ? prev + 1 : 59; // Stop at 14:59 (899 seconds)
        setProgressPercentage(((updatedSeconds === 59 ? 60 : updatedSeconds) / 60) * 100); // Calculate progress as a percentage based on updatedSeconds
        return updatedSeconds;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);


  // Calculate minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Format time as 14:XX
  const formattedTime = `14:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;

  // Progress calculation (percentage of the total time, 0-3599 seconds)

  return (
    <div className="timer-container">
      <div style={{ color: '#6F6881', fontSize: '10.24px' }}>Hours Worked</div>
      <p style={{ color: '#170C34', fontWeight: 700, fontSize: '20px' }}>{formattedTime} Hours</p>
      <ProgressBarComponent percentage={progressPercentage} />
    </div>
  );
};

export default TimerComponent;