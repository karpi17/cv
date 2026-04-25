import React from 'react';
import { FaHeart } from 'react-icons/fa';

/**
 * SEC-2 FIX: Stopka z klauzulą RODO/GDPR.
 * Wymagana prawnie w Polsce przy udostępnianiu danych osobowych
 * w kontekście rekrutacji.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cv-footer mt-5 py-4">
      <div className="text-center">
        <p className="mb-2">
          &copy; {currentYear} Kacper Wernerowicz
          <span className="mx-2">|</span>
          Zbudowane z <FaHeart className="text-danger mx-1" size={14} /> w React
        </p>
        <p className="text-muted small mb-0 px-3">
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
          niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia
          10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz.
          1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady
          (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
          fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
          swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
          (RODO)).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
