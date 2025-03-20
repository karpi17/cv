import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="digital-clock">
      <FaClock className="me-2" />
      <span>{formatTime(time)}</span>
    </div>
  );
};

export default DigitalClock;