import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
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
    </div>
  );
}

export default App;