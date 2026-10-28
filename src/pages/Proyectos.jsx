import TarjetaProyecto from "../components/TarjetaProyecto"

function Proyectos() {
  const proyectos = [
    {
      titulo: "Paleta de colores",
      descripcion: "Una web que muestra una paleta de colores monocromática.",
      enlace: "https://github.com/CMardones06/26-08",
      imagen: "paleta",
    },
    {
      titulo: "Animación de integrales definidas",
      descripcion: "Una animación que muestra la resolución de integrales definidas.",
      enlace: "https://github.com/CMardones06/EID-CalculoIntermedio-G06",
      imagen: "calculo",
    },
    {
      titulo: "Portafolio personal",
      descripcion: "Un portafolio web para mostrar proyectos y habilidades.",
      enlace: "https://github.com/CMardones06/frontend-portafolio",
      imagen: "portafolio",
    },
  ]

  return (
    <section className="container page-section">
      <h1>Mis proyectos</h1>
      <p className="page-intro">Algunos de los proyectos en los que he trabajado.</p>
      <div className="projects-list">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.enlace}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
            imagen={proyecto.imagen}
          />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
