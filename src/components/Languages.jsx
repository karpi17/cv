import React from 'react';
import { languages } from '../data/languages';

const Languages = () => {
  return (
    <div className="mt-5">
      <h2>Znajomość języków</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang.id}>
            {lang.name} - {lang.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;