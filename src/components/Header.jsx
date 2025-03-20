import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import DigitalClock from './DigitalClock';

const Header = () => {
  return (
    <div className="header">
      <DigitalClock />
      <img
        src="https://via.placeholder.com/150"
        alt="Kacper Wernerowicz"
        className="rounded-circle mb-3"
      />
      <h1 className="display-4">Kacper Wernerowicz</h1>
      <p className="lead">Technik programista</p>
      <div className="mt-3">
        <a href="https://www.linkedin.com/in/kacper-wernerowicz" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} className="me-3" />
        </a>
        <a href="https://github.com/karpi17" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
      </div>
    </div>
  );
};

export default Header;