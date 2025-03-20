import React, { useRef } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import ScrollToTop from './components/ScrollToTop';
import html2pdf from 'html2pdf.js';
import './styles/App.css';

function App() {
  const cvRef = useRef();

  const exportToPDF = () => {
    const element = cvRef.current;
    const opt = {
      margin: [10, 10],
      filename: 'CV_Kacper_Wernerowicz.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container mt-4">
      <button onClick={exportToPDF} className="pdf-button">
        Eksportuj do PDF
      </button>
      <div ref={cvRef}>
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <Certificates />
        <Languages />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;