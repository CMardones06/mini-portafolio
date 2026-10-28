import Icono from "./Icono"
import Ilustracion from "./Ilustracion"

function TarjetaProyecto({ titulo, descripcion, enlace, imagen }) {
  return (
    <article className="tarjeta-proyecto">
      <div className="project-image">
        <Ilustracion tipo={imagen} />
      </div>

      <div className="project-content">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>

        {enlace ? (
          <a
            className="btn-primary btn-small"
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${titulo} en GitHub (abre en otra pestaña)`}
          >
            Ver proyecto <Icono tipo="flecha" />
          </a>
        ) : (
          <p className="muted">Repositorio no disponible.</p>
        )}
      </div>
    </article>
  )
}

export default TarjetaProyecto