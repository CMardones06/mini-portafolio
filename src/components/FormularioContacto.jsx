import { useState } from "react"

const valoresIniciales = {
  nombre: "",
  email: "",
  mensaje: "",
}

function FormularioContacto() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function manejarCambio(event) {
    const { name, value } = event.target

    setValores((anteriores) => ({
      ...anteriores,
      [name]: value,
    }))

    setEnviado(false)
  }

  function manejarEnvio(event) {
    event.preventDefault()

    const nuevosErrores = {}

    if (!valores.nombre.trim()) {
      nuevosErrores.nombre = "Escribe tu nombre."
    }

    if (!valores.email.trim()) {
      nuevosErrores.email = "Escribe tu correo."
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email.trim())
    ) {
      nuevosErrores.email = "Escribe un correo válido."
    }

    if (!valores.mensaje.trim()) {
      nuevosErrores.mensaje = "Escribe un mensaje."
    }

    setErrores(nuevosErrores)
    setEnviado(false)

    if (Object.keys(nuevosErrores).length > 0) {
      return
    }

    setEnviado(true)
    setValores(valoresIniciales)
  }

  return (
    <form noValidate onSubmit={manejarEnvio}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        value={valores.nombre}
        onChange={manejarCambio}
      />
      {errores.nombre && (
        <p className="error">{errores.nombre}</p>
      )}

      <label htmlFor="email">Correo:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={valores.email}
        onChange={manejarCambio}
      />
      {errores.email && (
        <p className="error">{errores.email}</p>
      )}

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={valores.mensaje}
        onChange={manejarCambio}
      />
      {errores.mensaje && (
        <p className="error">{errores.mensaje}</p>
      )}

      <button type="submit">Enviar</button>

      {enviado && (
        <p role="status">
          Formulario validado correctamente. ¡Gracias por escribir!
        </p>
      )}
    </form>
  )
}

export default FormularioContacto