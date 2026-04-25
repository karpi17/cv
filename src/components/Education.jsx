import React from 'react';
import { education } from '../data/education';
import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Education = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500} triggerOnce>
      <section className="mb-5">
        <h2 className="mb-4" aria-label="Wykształcenie">
          <FaGraduationCap className="me-2" />
          Wykształcenie
        </h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {education.map((edu, index) => (
            <div key={edu.id} className="col">
              <div className="card h-100 edu-card">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <FaGraduationCap size={24} className="text-success" />
                    {index === 0 && (
                      <span className="badge bg-success bg-opacity-10 text-success">
                        W trakcie
                      </span>
                    )}
                  </div>
                  <h3 className="card-title h5">{edu.school}</h3>
                  <div className="d-flex align-items-center gap-2 text-muted small mb-2">
                    <FaBookOpen size={13} />
                    <span>{edu.specialization}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small mb-2">
                    <FaCalendarAlt size={13} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="mt-auto">
                    <span className="badge bg-secondary bg-opacity-10 text-body border">
                      {edu.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  </Reveal>
);

export default Education;