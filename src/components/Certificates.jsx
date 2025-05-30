import React from 'react';
import { certificates } from '../data/certificates';
import { FaCertificate } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Certificates = () => (
  <Reveal triggerOnce>
    <Fade direction="up" duration={500}>
      <div className="mb-5">
        <h2 className="mb-4">
          <FaCertificate className="me-2" />
          Certyfikaty
        </h2>
        {certificates.map((cert) => (
          <div key={cert.id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{cert.name}</h3>
              <p className="text-muted">Data: {cert.date}</p>
              <p className="text-muted">Organizator: {cert.organizer}</p>
              {cert.description && (
                <p className="text-muted">Opis: {cert.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  </Reveal>
);

export default Certificates;