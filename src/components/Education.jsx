import React from 'react';
import { education } from '../data/Education';
import { FaGraduationCap } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Education = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500}>
      <div className="mb-5">
        <h2 className="mb-4" aria-label="Wykształcenie">
          <FaGraduationCap className="me-2" />
          Wykształcenie
        </h2>
        {education.map((edu) => (
          <div key={edu.id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{edu.school}</h3>
              {edu.specialization && (
                <p className="text-muted">{edu.specialization}</p>
              )}
              {edu.period && (
                <p className="text-muted">{edu.period}</p>
              )}
              {edu.level && (
                <p className="text-muted">Poziom: {edu.level}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  </Reveal>
);

export default Education;