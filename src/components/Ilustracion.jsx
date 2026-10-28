function Ilustracion({ tipo = "paisaje" }) {
  if (tipo === "persona") {
    return (
      <svg
        viewBox="0 0 200 200"
        className="ilustracion"
        role="img"
        aria-label="Ilustración de perfil"
      >
        <rect width="200" height="200" rx="8" fill="#dbe6ed" />
        <circle cx="100" cy="72" r="32" fill="#91a8b8" />
        <path
          d="M38 167c0-35 26-55 62-55s62 20 62 55v5H38Z"
          fill="#91a8b8"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 240 220"
      className="ilustracion"
      role="img"
      aria-label="Ilustración de un paisaje de montañas"
    >
      <rect width="240" height="220" rx="8" fill="#c7d7e2" />
      <circle cx="167" cy="65" r="23" fill="#8da6b8" />
      <path
        d="m22 184 61-104a8 8 0 0 1 14 0l42 69 24-35a8 8 0 0 1 13 0l44 70a8 8 0 0 1-7 12H29a8 8 0 0 1-7-12Z"
        fill="#8da6b8"
      />
    </svg>
  )
}

export default Ilustracion