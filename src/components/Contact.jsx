import React from 'react';
import { contact } from '../data/contact';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import { Reveal, Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <Reveal triggerOnce>
      <Fade direction="up" duration={500} triggerOnce>
        <section className="mb-5">
          <h2 className="mb-4">
            <FaMapMarker className="me-2" />Kontakt
          </h2>
          <div className="card">
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <FaEnvelope className="me-2" />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li className="mb-3">
                  <FaPhone className="me-2" />
                  {contact.phone}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Fade>
    </Reveal>
  );
};

export default Contact;