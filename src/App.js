import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'; // tu damy nasze własne poprawki
import React, { useState } from 'react';
import Dane from './components/Dane';
import Kariera from './components/Kariera';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Clock from './components/Clock';

function App() {
  // Przechowuje nazwę aktualnie wyświetlanej sekcji (lub pusty string, jeśli żadna)
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionClick = (section) => {
    // Jeśli klikniemy ponownie ten sam przycisk, zamknij panel (toggle)
    setSelectedSection((prev) => (prev === section ? '' : section));
  };

  return (
    <div className="App">
      <h1>CV Elektroniczne</h1>
      {/* Zegar z datą */}
      <Clock />

      <div className="buttons-container">
        <button onClick={() => handleSectionClick('DANE')}>Dane</button>
        <button onClick={() => handleSectionClick('KARIERA')}>Kariera</button>
        <button onClick={() => handleSectionClick('SKILLS')}>Zdolności i umiejętności</button>
        <button onClick={() => handleSectionClick('PROJECTS')}>Projekty</button>
      </div>

      {/* Warunkowe wyświetlanie sekcji */}
      {selectedSection === 'DANE' && <Dane />}
      {selectedSection === 'KARIERA' && <Kariera />}
      {selectedSection === 'SKILLS' && <Skills />}
      {selectedSection === 'PROJECTS' && <Projects />}
    </div>
  );
}

export default App;
