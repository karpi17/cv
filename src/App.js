
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import React, { useState } from 'react';
import Projects from './components/Projects';
import Clock from './components/Clock';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Languages from './components/Languages';

function App() {

  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionClick = (section) => {
 
    setSelectedSection((prev) => (prev === section ? '' : section));
  };

  return (
    <div className="App">
      <h1>CV Elektroniczne</h1>
      {/* Zegar z datą */}
      <Clock />

      <div className="buttons-container">
        <button onClick={() => handleSectionClick('Contact')}>Dane kontakowe </button>
        <button onClick={() => handleSectionClick('KARIERA')}>Kariera</button>
        <button onClick={() => handleSectionClick('SKILLS')}>Zdolności i umiejętności</button>
        <button onClick={() => handleSectionClick('Education')}>Edukacja </button>
        <button onClick={() => handleSectionClick('Certificates')}>Certifikaty</button>
        <button onClick={() => handleSectionClick('SKILLS')}>Languages</button>
        <button onClick={() => handleSectionClick('PROJECTS')}>Projekty</button>
      </div>

      {selectedSection === 'Contact' && <Contact />}
      {selectedSection === 'KARIERA' && <Experience />}
      {selectedSection === 'SKILLS' && <Skills />}
      {selectedSection === 'Education' && <Education />}
      {selectedSection === 'Certificates' && <Certificates />}
      {selectedSection === 'Languages' && <Languages />}
      {selectedSection === 'PROJECTS' && <Projects />}
    </div>
  );
}

export default App;
