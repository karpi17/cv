import React from 'react';
import { certificates } from '../data/certificates';
import { FaAward, FaCheckCircle, FaUniversity } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

/**
 * Certyfikaty wyświetlane jako "achievement cards" — wyeksponowane
 * wizualnie z kodem kwalifikacji, statusem i listą kompetencji.
 */
const Certificates = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500} triggerOnce>
      <section className="mb-5">
        <h2 className="mb-4" aria-label="Certyfikaty zawodowe">
          <FaAward className="me-2" />
          Certyfikaty zawodowe
        </h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="col">
              <div className="card h-100 cert-card">
                <div className="card-body d-flex flex-column">
                  {/* Nagłówek z kodem i statusem */}
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-success cert-code-badge">
                      {cert.code}
                    </span>
                    <span className="badge bg-success bg-opacity-10 text-success d-flex align-items-center gap-1">
                      <FaCheckCircle size={12} />
                      {cert.status}
                    </span>
                  </div>

                  {/* Nazwa kwalifikacji */}
                  <h3 className="card-title h5 mb-3">{cert.name}</h3>

                  {/* Lista kompetencji */}
                  <ul className="list-unstyled flex-grow-1 mb-3">
                    {cert.competencies.map((comp, idx) => (
                      <li key={idx} className="mb-1 d-flex align-items-start gap-2">
                        <FaCheckCircle size={12} className="text-success mt-1 flex-shrink-0" />
                        <span className="small">{comp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Emitent i data */}
                  <div className="text-muted small mt-auto d-flex align-items-center gap-2">
                    <FaUniversity size={14} />
                    <span>{cert.organizer} • {cert.date}</span>
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

export default Certificates;