import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import DigitalClock from './DigitalClock';
import foto from '../zdjecia/foto.png';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDarkMode(true);
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="header d-flex align-items-center justify-content-between p-3 mb-4">
      <div className="d-flex align-items-center">
        <img
          src={foto}
          alt="Kacper Wernerowicz"
          className="rounded-circle me-3"
          style={{ width: '100px', height: '100px' }}
        />
        <div>
          <h1 className="mb-0">Kacper Wernerowicz</h1>
          <p className="text-muted mb-0">Technik programista</p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
  <DigitalClock />
  <button onClick={toggleTheme} className="theme-toggle">
    {isDarkMode ? <FaSun /> : <FaMoon />}
  </button>
  <div className="d-flex gap-2">
    <a href="https://linkedin.com/in/kacper-wernerowicz" target="_blank" rel="noreferrer">
      <FaLinkedin size={24} className="text-dark" />
    </a>
    <a href="https://github.com/karpi17" target="_blank" rel="noreferrer">
      <FaGithub size={24} className="text-dark" />
    </a>
  </div>
</div>
    </div>
  );
};

export default Header;