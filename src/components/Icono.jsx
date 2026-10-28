function Icono({ tipo }) {
  const dibujos = {
    codigo: (
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-13-4 16" />
    ),

    pantalla: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 21h8m-4-4v4" />
      </>
    ),

    flecha: (
      <path d="M4 12h16m-6-6 6 6-6 6" />
    ),

    personas: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-3a6 6 0 0 1 12 0v3" />
        <path d="M4 9a3 3 0 0 0 0 6" />
        <path d="M20 9a3 3 0 0 1 0 6" />
        <path d="M2 21v-2m20 2v-2" />
      </>
    ),

    estrella: (
      <path
        d="m12 3 2.8 5.7 6.2.9-4.5 4.4
           1.1 6.2L12 17.3l-5.6 2.9
           1.1-6.2L3 9.6l6.2-.9Z"
      />
    ),

    html: (
      <>
        <path d="m5 3 1.5 16L12 21l5.5-2L19 3Z" />
        <path d="M16 7H9l.4 4H15l-.5 5-2.5.8-2.5-.8" />
      </>
    ),

    css: (
      <>
        <path d="m5 3 1.5 16L12 21l5.5-2L19 3Z" />
        <path d="M8 7h8l-.5 4H10m5.5 0-.5 5-3 .8-2.5-.8" />
      </>
    ),

    react: (
      <>
        <circle cx="12" cy="12" r="1.5" />

        <ellipse cx="12" cy="12" rx="10" ry="4" />

        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(60 12 12)"
        />

        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(120 12 12)"
        />
      </>
    ),

    nodo: (
      <>
        <path d="m12 2 9 5v10l-9 5-9-5V7Z" />
        <path d="M9 15V9l6 6V9" />
      </>
    ),
  }

  // JavaScript se representa mediante sus iniciales.
  if (tipo === "js") {
    return (
      <span className="icono-letras" aria-hidden="true">
        JS
      </span>
    )
  }

  return (
    <svg
      className="icono"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dibujos[tipo] || dibujos.codigo}
    </svg>
  )
}

export default Icono