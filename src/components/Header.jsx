import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaMoon, FaSun,FaBirthdayCake, FaMapMarker } from 'react-icons/fa';
import DigitalClock from './DigitalClock';
import foto from '../zdjecia/foto.png';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    document.body.classList.toggle('dark-mode', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <div className="header">
      <div className="d-flex align-items-center gap-3">
        <img
          src={foto}
          alt="Kacper Wernerowicz"
          className="rounded-circle"
        />
        <div>
          <h1 className="mb-0">Kacper Wernerowicz</h1>
          <p className="text-muted mb-0">Technik programista</p>
          <p>  <FaBirthdayCake className="me-2" /> 12.10.2005</p>
          <p> <FaMapMarker className="me-2" /> Elbląg</p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <DigitalClock />
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div className="d-flex gap-2">
          <a href="https://linkedin.com/in/kacper-wernerowicz" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/karpi17" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;