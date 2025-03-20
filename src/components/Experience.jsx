import React from 'react';
import { experience } from '../data/Experience';
import { FaBriefcase } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Experience = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500}>
        <div className="mb-5">
          <h2 className="mb-4"><FaBriefcase className="me-2" />Doświadczenie</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">{exp.position}</h3>
                <h4 className="card-subtitle text-muted mb-2">{exp.company}</h4>
                <p className="text-muted">{exp.period}</p>
                <ul className="mt-2">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </Reveal>
  );
};

export default Experience;