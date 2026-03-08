import projectsData from '../data/projects.js';

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>Mis Proyectos</h1>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
              <img 
                src={project.image} 
                alt={project.name} 
                className="project-image"
              />
            )}
            
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver proyecto →
              </a>
            )}
          </div>
        ))}
      </div>

      {projectsData.length === 0 && (
        <p>Aún no hay proyectos cargados...</p>
      )}
    </div>
  );
}