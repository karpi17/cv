import React from 'react';
import { languages } from '../data/languages';
import { FaLanguage } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

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
                  <li key={lang.id} className="mb-3">
                    <span className="fw-bold">{lang.name}:</span> {lang.level}
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