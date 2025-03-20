import React from 'react';
import { certificates } from '../data/certificates';

const Certificates = () => {
  return (
    <div className="mt-5">
      <h2>Certyfikaty</h2>
      {certificates.map((cert) => (
        <div key={cert.id} className="mb-4">
          <h3>{cert.name}</h3>
          <p>Data: {cert.date}</p>
          <p>Organizator: {cert.organizer}</p>
        </div>
      ))}
    </div>
  );
};

export default Certificates;