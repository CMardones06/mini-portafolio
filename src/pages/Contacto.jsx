import FormularioContacto from "../components/FormularioContacto"

function Contacto() {
  return (
    <section className="container page-section contact-page">
      <h1>Contacto</h1>

      <p className="page-intro">
        ¿Tienes alguna pregunta o propuesta?
        <br />
        ¡Me encantaría saber de ti!
      </p>

      <FormularioContacto />
    </section>
  )
}

export default Contacto