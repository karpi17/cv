import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="digital-clock" aria-label="Zegar cyfrowy">
      <FaClock className="me-2" />
      <span>{time.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
    </div>
  );
};

export default DigitalClock;