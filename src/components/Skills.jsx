import React from 'react';
import { skills } from '../data/Skills';

const Skills = () => {
  return (
    <div className="mt-5">
      <h2>Umiejętności</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;