import React from 'react';
import { experience } from '../data/Experience';
import { FaBriefcase } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Experience = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500} triggerOnce>
      <div className="mt-4">
        <h2 aria-label="Doświadczenie">
          <FaBriefcase className="me-2" />
          Doświadczenie
        </h2>
        {experience.map((exp) => (
          <div key={exp.id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{exp.position}</h3>
              <p className="text-muted">
                {exp.company} | {exp.period}
              </p>
              {exp.description && exp.description.length > 0 && (
                <ul>
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  </Reveal>
);

export default Experience;