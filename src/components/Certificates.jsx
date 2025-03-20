import React from 'react';
import { certificates } from '../data/certificates';
import { FaCertificate } from 'react-icons/fa';
import { Reveal } from 'react-awesome-reveal';
import { fadeIn } from 'react-awesome-reveal';

const Certificates = () => {
  return (
    <Reveal keyframes={fadeIn} triggerOnce>
      <div className="mt-5">
        <h2><FaCertificate className="me-2" />Certyfikaty</h2>
        {certificates.map((cert) => (
          <div key={cert.id} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{cert.name}</h3>
              <p className="card-text">Data: {cert.date}</p>
              <p className="text-muted">Organizator: {cert.organizer}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default Certificates;