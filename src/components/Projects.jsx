import React from 'react';

// Przykładowe dane projektów
const projectsData = [
  {
    title: 'Projekt 1',
    image: 'https://via.placeholder.com/200', // link do obrazka
    video: '', // lub link do pliku wideo
    link: 'https://github.com/projekt1'
  },
  {
    title: 'Projekt 2',
    image: 'https://via.placeholder.com/200',
    video: '',
    link: 'https://github.com/projekt2'
  }
];

const Projects = () => {
  return (
    <div className="panel">
      <h2>Projekty</h2>
      <div className="projects-grid">
        {projectsData.map((proj, index) => (
          <div key={index} className="project-tile">
            {/* Wyświetlamy obrazek, jeśli jest podany */}
            {proj.image && <img src={proj.image} alt={proj.title} />}
            {/* Albo wideo, jeśli jest podane */}
            {proj.video && <video src={proj.video} controls />}
            <h3>{proj.title}</h3>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Zobacz projekt
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
