import React from 'react';
import { experience } from '../data/Experience';
import { FaBriefcase } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';
const Experience = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500}>
    <div className="mt-5">
      <h2><FaBriefcase className="me-2" />Doświadczenie</h2>
      {experience.map((exp) => (
        <div key={exp.id} className="card">
          <div className="card-body">
            <h3 className="card-title">{exp.position}</h3>
            <h4 className="card-subtitle mb-2 text-muted">{exp.company}</h4>
            <p className="card-text">{exp.period}</p>
            <ul>
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