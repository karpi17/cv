import React from 'react';
import { contact } from '../data/contact';

const Contact = () => {
  return (
    <div className="mt-5">
      <h2>Kontakt</h2>
      <p>Email: {contact.email}</p>
      <p>Telefon: {contact.phone}</p>
      <p>Data urodzenia: {contact.birthDate}</p>
      <p>Miejscowość: {contact.city}</p>
    </div>
  );
};

export default Contact;