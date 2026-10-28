function Icono({ tipo }) {
  const dibujos = {
    codigo: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-13-4 16" />,
    pantalla: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 21h8m-4-4v4" />
      </>
    ),
    flecha: <path d="M4 12h16m-6-6 6 6-6 6" />,
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