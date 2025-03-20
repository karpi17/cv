import React from 'react';
import { experience } from '../data/Experience';

const Experience = () => {
  return (
    <div className="mt-5">
      <h2>Doświadczenie</h2>
      {experience.map((exp) => (
        <div key={exp.id} className="mb-4">
          <h3>{exp.position}</h3>
          <p>{exp.company} | {exp.period}</p>
          <ul>
            {exp.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;