import React from 'react';
import { experience } from '../data/experience';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Experience = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500} triggerOnce>
      <section className="mb-5">
        <h2 className="mb-4" aria-label="Doświadczenie zawodowe">
          <FaBriefcase className="me-2" />
          Doświadczenie
        </h2>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="card mb-3 exp-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                  <h3 className="card-title h5 mb-0">{exp.position}</h3>
                  {index === 0 && (
                    <span className="badge bg-success bg-opacity-10 text-success">
                      Aktualnie
                    </span>
                  )}
                </div>
                <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
                  <span className="d-flex align-items-center gap-1">
                    <FaBuilding size={13} />
                    {exp.company}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <FaCalendarAlt size={13} />
                    {exp.period}
                  </span>
                </div>
                {exp.description && exp.description.length > 0 && (
                  <ul className="list-unstyled mb-0">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="mb-1 d-flex align-items-start gap-2">
                        <FaCheckCircle size={12} className="text-success mt-1 flex-shrink-0" />
                        <span className="small">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  </Reveal>
);

export default Experience;