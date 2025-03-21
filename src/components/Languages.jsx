// Languages.jsx
import React from 'react';
import { languages } from '../data/languages';
import { FaLanguage } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const LanguageLevel = ({ level }) => {
  return (
    <div className="progress-bar-wrapper">
      <div 
        className="progress-bar-fill"
        style={{ width: `${(level/5)*100}%` }}
      />
    </div>
  );
};

const Languages = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500}>
        <div className="mb-5">
          <h2 className="mb-4"><FaLanguage className="me-2" />Języki</h2>
          <div className="card">
            <div className="card-body">
              <ul className="list-unstyled">
                {languages.map((lang) => (
                  <li key={lang.id} className="mb-3 d-flex justify-content-between align-items-center">
                    <span className="fw-bold me-3">{lang.name}</span>
                    <LanguageLevel level={lang.level} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </Reveal>
  );
};

export default Languages;