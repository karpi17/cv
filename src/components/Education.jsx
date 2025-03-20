import React from 'react';
import { education } from '../data/Education';

const Education = () => {
  return (
    <div className="mt-5">
      <h2>Wykształcenie</h2>
      {education.map((edu) => (
        <div key={edu.id} className="mb-4">
          <h3>{edu.school}</h3>
          <p>{edu.specialization} | {edu.period}</p>
          <p>Poziom: {edu.level}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;