import { useState } from "react"

const valoresIniciales = { nombre: "", email: "", mensaje: "" }

function FormularioContacto() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function manejarCambio(event) {
    const { name, value } = event.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
    setEnviado(false)
    setErrores((anteriores) => ({ ...anteriores, [name]: "" }))
  }

  function manejarEnvio(event) {
    event.preventDefault()
    const nuevosErrores = {}

    if (!valores.nombre.trim()) nuevosErrores.nombre = "Escribe tu nombre."
    if (!valores.email.trim()) {
      nuevosErrores.email = "Escribe tu correo electrónico."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email.trim())) {
      nuevosErrores.email = "Escribe un correo válido, por ejemplo nombre@correo.cl."
    }
    if (!valores.mensaje.trim()) nuevosErrores.mensaje = "Escribe tu mensaje."

    setErrores(nuevosErrores)
    setEnviado(false)

    if (Object.keys(nuevosErrores).length > 0) {
      const primerCampo = Object.keys(nuevosErrores)[0]
      event.currentTarget.elements.namedItem(primerCampo).focus()
      return
    }

    setEnviado(true)
    setValores(valoresIniciales)
  }

  return (
    <form className="contact-form" noValidate onSubmit={manejarEnvio}>
      <p className="form-note">Todos los campos son obligatorios.</p>
      <div className="form-field">
        <label htmlFor="nombre">Nombre <span aria-hidden="true">*</span></label>
        <input
          id="nombre" name="nombre" type="text" autoComplete="name"
          placeholder="Tu nombre" required value={valores.nombre} onChange={manejarCambio}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? "error-nombre" : undefined}
        />
        {errores.nombre && <p className="error" id="error-nombre" role="alert">{errores.nombre}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="email">Correo electrónico <span aria-hidden="true">*</span></label>
        <input
          id="email" name="email" type="email" autoComplete="email"
          placeholder="tu@correo.cl" required value={valores.email} onChange={manejarCambio}
          aria-invalid={Boolean(errores.email)}
          aria-describedby={errores.email ? "error-email" : undefined}
        />
        {errores.email && <p className="error" id="error-email" role="alert">{errores.email}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="mensaje">Mensaje <span aria-hidden="true">*</span></label>
        <textarea
          id="mensaje" name="mensaje" rows={5} placeholder="Escribe tu mensaje aquí…"
          required value={valores.mensaje} onChange={manejarCambio}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
        />
        {errores.mensaje && <p className="error" id="error-mensaje" role="alert">{errores.mensaje}</p>}
      </div>
      <button className="btn-primary" type="submit">Enviar mensaje</button>
      <div aria-live="polite" aria-atomic="true">
        {enviado && (
          <p className="success" role="status">
            ¡Gracias por escribir! El formulario se validó correctamente y los campos se limpiaron.
          </p>
        )}
      </div>
      <p className="form-note">Formulario de demostración: no envía correos.</p>
    </form>
  )
}

export default FormularioContacto
