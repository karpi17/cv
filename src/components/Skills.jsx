import React from 'react';
import { skills, softSkills } from '../data/skills';
import { Reveal, Fade } from 'react-awesome-reveal';

/**
 * Named imports — TYLKO używane ikony.
 * Nowe: FaHtml5, FaDocker, FaLightbulb, FaClock, FaFileAlt
 */
import {
  FaCogs,
  FaQuestionCircle,
  FaJava,
  FaMicrosoft,
  FaCode,
  FaJsSquare,
  FaPhp,
  FaReact,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaGithub,
  FaDatabase,
  FaDocker,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaFileAlt,
} from 'react-icons/fa';

import { DiPhp, DiVisualstudio } from 'react-icons/di';
import { SiWordpress, SiAndroidstudio } from 'react-icons/si';

const iconMap = {
  FaCogs, FaJava, FaMicrosoft, FaCode, FaJsSquare, FaPhp,
  FaReact, FaBootstrap, FaCss3, FaHtml5, FaGithub, FaDatabase,
  FaDocker, FaUsers, FaLightbulb, FaClock, FaFileAlt,
  DiPhp, DiVisualstudio,
  SiWordpress, SiAndroidstudio,
};

const getIcon = (iconName, size = 18) => {
  const IconComponent = iconMap[iconName];
  return IconComponent
    ? <IconComponent size={size} />
    : <FaQuestionCircle size={size} />;
};

/**
 * Mapowanie tagów na etykiety i kolory Bootstrap.
 */
const tagConfig = {
  daily: { label: "Codzienny stack", variant: "success" },
  familiar: { label: "Doświadczenie", variant: "secondary" },
};

const Skills = () => {
  return (
    <section className="mb-5">
      <Reveal triggerOnce>
        <Fade direction="up" duration={500} delay={100}>
          <h2 className="mb-4" aria-label="Umiejętności">
            <FaCogs className="me-2" />
            Umiejętności
          </h2>

          {/* Legenda tagów */}
          <div className="d-flex gap-3 mb-4 flex-wrap">
            {Object.entries(tagConfig).map(([key, cfg]) => (
              <span key={key} className="d-flex align-items-center gap-1 small text-muted">
                <span className={`badge bg-${cfg.variant}`}>&nbsp;</span>
                {cfg.label}
              </span>
            ))}
          </div>

          {skills.map((group) => (
            <div key={group.category} className="card mb-4">
              <div className="card-body">
                <h3 className="mb-3">{group.category}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const tag = tagConfig[skill.tag] || tagConfig.familiar;
                    return (
                      <span
                        key={skill.name}
                        className={`skill-badge badge bg-${tag.variant} bg-opacity-10 text-${tag.variant === 'success' ? 'success' : 'body'} border border-${tag.variant}`}
                      >
                        {getIcon(skill.icon)}
                        <span className="ms-1">{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </Reveal>

      <Reveal triggerOnce>
        <Fade direction="up" duration={500} delay={100}>
          <h3 className="mb-4">Umiejętności miękkie</h3>
          {softSkills.map((group) => (
            <div key={group.category} className="card mb-4">
              <div className="card-body">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {group.items.map((skill) => (
                    <div key={skill.title} className="col">
                      <div className="h-100 p-3 skill-card">
                        <div className="d-flex align-items-center gap-3 mb-2">
                          {getIcon(skill.icon, 28)}
                          <strong className="mb-0 h5">{skill.title}</strong>
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
    </section>
  );
};

export default Skills;