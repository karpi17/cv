import React from 'react';
import { languages } from '../data/languages';
import { FaLanguage } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Languages = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500} triggerOnce>
      <section className="mb-5">
        <h2 className="mb-4">
          <FaLanguage className="me-2" />Języki
        </h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              {languages.map((lang) => (
                <li key={lang.id} className="mb-3 d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{lang.name}</span>
                  <span className="badge bg-secondary bg-opacity-10 text-body border">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Fade>
  </Reveal>
);

export default Languages;