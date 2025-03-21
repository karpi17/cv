import React from 'react';
import { skills, softSkills } from '../data/Skills';
import { Reveal, Fade } from 'react-awesome-reveal';
import * as FaIcons from 'react-icons/fa';

const getIcon = (iconName) => {
  const IconComponent = FaIcons[iconName];
  return IconComponent ? <IconComponent /> : <FaIcons.FaQuestionCircle />; // Fallback
};


const Skills = () => {
  return (
    
        <div className="mb-5">
          <Reveal 
        triggerOnce    
      >
        <Fade direction="up" duration={500} delay={100}>
        <h2 className="mb-4"><fa FaCogs className="me-2" />Umiejętności</h2>
        {skills.map((group) => (
            <div key={group.category} className="card mb-4">
              <div className="card-body">
                <h3 className="mb-3">{group.category}</h3>
                <div className="row">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="col-md-6 mb-3">
                      <div className="d-flex align-items-center gap-2">
                        {getIcon(skill.icon)}
                        <span className="fw-bold">{skill.name}</span>
                        <div className="ms-auto d-flex flex-row gap-1">
                           {[...Array(5)].map((_, i) => (
                            <div
                            key={i}
                            className={`dot ${i < skill.level ? 'filled' : 'empty'}`}
                            style={{ display: 'inline-block' }} // opcjonalnie, jeśli CSS nie ustawia inline
                            />
                            ))}
                          </div>
                      </div>
                      {skill.details && (
                        <div className="mt-2 text-muted small">
                          <ul className="list-unstyled mb-0">
                            {skill.details.map((detail, idx) => (
                              <li key={idx}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

 </Fade>
 </Reveal>
 <Reveal 
        triggerOnce 
      >
        <Fade direction="up" duration={500} delay={100}>
        {softSkills.map((group) => (
            <div key={group.category} className="card mb-4">
              <div className="card-body">
                <h3 className="mb-3">{group.category}</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {group.items.map((skill) => (
                    <div key={skill.title} className="col">
                      <div className="h-100 p-3 skill-card">
                        <div className="d-flex align-items-center gap-3 mb-2">
                          {getIcon(skill.icon, 28)}
                          <h4 className="mb-0">{skill.title}</h4>
                        </div>
                        <p className="text-muted mb-0">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          ))}
             </Fade>
             </Reveal>
        </div>
  );
};

export default Skills;