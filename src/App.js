import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import './styles/App.css';

/**
 * SEO-3 FIX: Semantyczna struktura HTML5.
 * - <main> okalający główne sekcje CV
 * - <Footer> z klauzulą RODO na samym dole
 */
function App() {
  return (
    <div className="container mt-4">
      <Header />
      <main>
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <Certificates />
        <Languages />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;