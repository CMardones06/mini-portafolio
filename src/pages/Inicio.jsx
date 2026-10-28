import { Link } from "react-router-dom"
import Icono from "../components/Icono"
import Ilustracion from "../components/Ilustracion"

function Inicio() {
const destacados = [
  { icono: "codigo", titulo: "Desarrollo", detalle: "Frontend" },
  { icono: "pantalla", titulo: "Proyectos", detalle: "académicos" },
  { icono: "personas", titulo: "Aprendizaje", detalle: "continuo" },
  { icono: "estrella", titulo: "Compromiso", detalle: "y dedicación" },
]

return (
  <>
  <section className="hero-section">
  <div className="container hero-inner">
    <div className="hero-text">
      <h1>Hola, soy Camila Mardones</h1>

      <p className="subtitle">
        Estudiante de Ingeniería Civil en Informática
      </p>

      <p>
        Bienvenido a mi portafolio.
        <br />
        Aquí puedes conocer más sobre mí, mis habilidades
        y mis proyectos.
      </p>

      <Link to="/sobre-mi" className="btn-primary">
        Explorar <Icono tipo="flecha" />
      </Link>
    </div>

    <div className="hero-image">
      <Ilustracion />
    </div>
  </div>
</section>

<section className="container destacados" aria-label="Lo que me motiva">
  <ul className="features-grid">
    {destacados.map(({ icono, titulo, detalle }) => (
      <li className="feature-card" key={titulo}>
        <Icono tipo={icono} />
        <p>
          {titulo}
          <br />
          <span>{detalle}</span>
        </p>
      </li>
    ))}
  </ul>
</section>
  </>
)
}

export default Inicio