import React from 'react';
import { education } from '../data/Education';
import { FaGraduationCap } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';
const Education = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500}>
      <div className="mt-5">
        <h2><FaGraduationCap className="me-2" />Wykształcenie</h2>
        {education.map((edu) => (
          <div key={edu.id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{edu.school}</h3>
              <p className="card-text">{edu.specialization}</p>
              <p className="text-muted">{edu.period}</p>
              <p className="text-muted">Poziom: {edu.level}</p>
            </div>
          </div>
        ))}
      </div>
      </Fade>
    </Reveal>
  );
};

export default Education;