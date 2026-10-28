import { Link } from "react-router-dom"

function Inicio() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Camila Mardones</h1>
        <p className="subtitle">
          Estudiante de Ingeniería Civil en Informática
        </p>
        <p>
          Bienvenido a mi portafolio. Aquí comparto mis
          habilidades, intereses y proyectos.
        </p>

        <Link to="/sobre-mi" className="btn-primary">
          Explorar
        </Link>
      </div>
    </section>
  )
}

export default Inicio