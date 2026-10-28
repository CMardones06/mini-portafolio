import Icono from "../components/Icono"

function Habilidades() {
  // Los niveles conservan la autoevaluación del portafolio original.
  const listaHabilidades = [
    { nombre: "HTML", nivel: "Avanzado", icono: "html" },
    { nombre: "CSS", nivel: "Avanzado", icono: "css" },
    { nombre: "JavaScript", nivel: "Intermedio", icono: "js" },
    { nombre: "React", nivel: "Intermedio", icono: "react" },
    { nombre: "Node.js", nivel: "Básico", icono: "nodo" },
  ]
  const herramientas = [
    { nombre: "Git", nivel: "Intermedio" },
    { nombre: "GitHub", nivel: "Intermedio" },
    { nombre: "VS Code", nivel: "Avanzado" },
    { nombre: "Figma", nivel: "Básico" },
  ]

  return (
    <div className="container page-section">
      <h1>Habilidades y lenguajes</h1>
      <section className="skills-section">
        <h2>Tecnologías</h2>
        <ul className="skills-grid">
          {listaHabilidades.map(({ nombre, nivel, icono }) => (
            <li className="skill-card" key={nombre}>
              <Icono tipo={icono} />
              <h3>{nombre}</h3>
              <div className="skill-track" aria-hidden="true">
                <span className={`skill-fill nivel-${nivel.toLowerCase()}`} />
              </div>
              <p className="skill-level">{nivel}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="tools-section">
        <h2>Herramientas</h2>
        <ul className="tool-list">
          {herramientas.map(({ nombre, nivel }) => (
            <li key={nombre}>{nombre}<span> · {nivel}</span></li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Habilidades
