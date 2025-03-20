import React from 'react';
import { skills } from '../data/Skills';
import { FaCode } from 'react-icons/fa';
import { Reveal } from 'react-awesome-reveal';
import { fadeIn } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <Reveal keyframes={fadeIn} triggerOnce>
      <div className="mt-5">
        <h2><FaCode className="me-2" />Umiejętności</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled">
              {skills.map((skill) => (
                <li key={skill.id} className="mb-2">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Skills;