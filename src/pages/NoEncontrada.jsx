import { Link } from "react-router-dom"

function NoEncontrada() {
  return (
    <section className="container page-section not-found">
      <p className="eyebrow">Error 404</p>
      <h1>Página no encontrada</h1>

      <p>
        La dirección que buscas no existe.
        Puedes volver al inicio o usar el menú.
      </p>

      <Link className="btn-primary" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NoEncontrada