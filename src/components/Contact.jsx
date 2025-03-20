import React from 'react';
import { contact } from '../data/contact';
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarker } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';
const Contact = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500}>
      <div className="mt-5">
        <h2><FaMapMarker className="me-2" />Kontakt</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                {contact.email}
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" />
                {contact.phone}
              </li>
              <li className="mb-2">
                <FaBirthdayCake className="me-2" />
                {contact.birthDate}
              </li>
              <li className="mb-2">
                <FaMapMarker className="me-2" />
                {contact.city}
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Fade>
    </Reveal>
  );
};

export default Contact;