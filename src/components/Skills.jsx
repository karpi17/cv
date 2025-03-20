import React from 'react';
import { skills } from '../data/Skills';
import { FaCode } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500}>
        <div className="mb-5">
          <h2 className="mb-4"><FaCode className="me-2" />Umiejętności</h2>
          <div className="card">
            <div className="card-body">
              <ul className="list-unstyled">
                {skills.map((skill) => (
                  <li key={skill.id} className="mb-3">
                    <span className="fw-bold">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </Reveal>
  );
};

export default Skills;