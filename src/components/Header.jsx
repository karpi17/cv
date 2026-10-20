import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaMoon, FaSun, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import DigitalClock from './DigitalClock';
import { contact } from '../data/contact';
import foto from '../zdjecia/foto.png';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="card header-card mb-4">
      <div className="card-body">
        <div className="row align-items-center">
          {/* Lewa strona — zdjęcie + dane */}
          <div className="col-md-8">
            <div className="d-flex align-items-center gap-4">
              <img
                src={foto}
                alt="Zdjęcie profilowe — Kacper Wernerowicz"
                className="rounded-circle header-photo"
              />
              <div>
                <h1 className="h2 fw-bold mb-1">Kacper Wernerowicz</h1>
                <p className="text-muted mb-2 fs-5">Student Informatyki | Lider Zespołu &amp; Programista</p>
                <div className="d-flex flex-wrap gap-3 text-muted small">
                  <span className="d-flex align-items-center gap-1">
                    <FaBirthdayCake size={14} />
                    12.10.2005
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <FaMapMarkerAlt size={14} />
                    Elbląg
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <FaEnvelope size={14} />
                    {contact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Prawa strona — akcje */}
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="d-flex flex-column align-items-md-end gap-3">
              <DigitalClock />
              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="btn btn-sm btn-outline-secondary"
                  aria-label={isDarkMode ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
                <a
                  href="https://linkedin.com/in/kacper-wernerowicz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-primary"
                  aria-label="Profil LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/karpi17"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-secondary"
                  aria-label="Profil GitHub"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;