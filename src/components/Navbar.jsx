import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          Enrique Ordaz
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/resume" className="nav-link">
            Currículum
          </Link>
        </li>
      </ul>
    </nav>
  );
}