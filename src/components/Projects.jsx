import React from 'react';
import { projects } from '../data/projects';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Projects = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500} triggerOnce>
      <section className="mb-5">
        <h2 className="mb-4" aria-label="Projekty">
          <FaCode className="me-2" />
          Projekty
        </h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((proj) => (
            <div key={proj.id} className="col">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{proj.title}</h3>
                  <p className="text-muted flex-grow-1">{proj.description}</p>
                  <div className="d-flex flex-wrap mb-3">
                    {proj.tech.map((t) => (
                      <span key={t} className="badge bg-success bg-opacity-75 me-2 mb-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex flex-wrap">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary me-2 mb-1"
                      aria-label={`Kod źródłowy: ${proj.title}`}
                    >
                      <FaGithub className="me-1" />
                      Kod źródłowy
                    </a>
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-success"
                        aria-label={`Demo na żywo: ${proj.title}`}
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Demo
                      </a>
                    )}
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

export default Projects;
