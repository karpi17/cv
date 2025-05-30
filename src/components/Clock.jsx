import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <p>Aktualny czas: {now.toLocaleTimeString()}</p>
      <p>Data: {now.toLocaleDateString()}</p>
    </div>
  );
};

export default Clock;
