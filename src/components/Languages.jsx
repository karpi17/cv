import React from 'react';
import { languages } from '../data/languages';
import { FaLanguage } from 'react-icons/fa';
import { Reveal } from 'react-awesome-reveal';
import { fadeIn } from 'react-awesome-reveal';

const Languages = () => {
  return (
    <Reveal keyframes={fadeIn} triggerOnce>
      <div className="mt-5">
        <h2><FaLanguage className="me-2" />Języki</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled">
              {languages.map((lang) => (
                <li key={lang.id} className="mb-2">
                  <strong>{lang.name}:</strong> {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Languages;