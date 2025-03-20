import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <p>Aktualny czas: {time.toLocaleTimeString()}</p>
      <p>Data: {time.toLocaleDateString()}</p>
    </div>
  );
};

export default Clock;
