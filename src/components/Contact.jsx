import React from 'react';
import { contact } from '../data/contact';
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarker } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500}>
        <div className="mb-5">
          <h2 className="mb-4"><FaMapMarker className="me-2" />Kontakt</h2>
          <div className="card">
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaEnvelope className="me-2" />
                  {contact.email}
                </li>
                <li className="mb-3">
                  <FaPhone className="me-2" />
                  {contact.phone}
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