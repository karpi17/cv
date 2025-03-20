import React from 'react';
import { languages } from '../data/languages';
import { FaLanguage } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';
const Languages = () => {
  return (
<Reveal triggerOnce>
<Fade direction="up" duration={500}>
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
      </Fade>
    </Reveal>
  );
};

export default Languages;