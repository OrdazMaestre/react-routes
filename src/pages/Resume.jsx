import { experiences, studies } from '../data/resume.js';  // importa ambos arrays

export default function Resume() {
  return (
    <div className="resume-page">
      <h1>Currículum</h1>

      <section className="experience-section">
        <h2>Experiencia Laboral</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                {/* Si tienes descripción, agrégala aquí */}
                {/* <p>{exp.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2>Educación</h2>
        <div className="timeline">
          {studies.map((study) => (
            <div key={study.id} className="timeline-item">
              <div className="timeline-date">{study.date}</div>
              <div className="timeline-content">
                <h3>{study.title}</h3>
                <p className="institution">{study.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {(experiences.length === 0 && studies.length === 0) && (
        <p>Aún no hay información cargada en resume.js</p>
      )}
    </div>
  );
}