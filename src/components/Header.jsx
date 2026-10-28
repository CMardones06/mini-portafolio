import { NavLink } from "react-router-dom"

const enlaces = [
  { ruta: "/", nombre: "Inicio" },
  { ruta: "/sobre-mi", nombre: "Sobre mí" },
  { ruta: "/habilidades", nombre: "Habilidades" },
  { ruta: "/proyectos", nombre: "Proyectos" },
  { ruta: "/contacto", nombre: "Contacto" },
]

function Header() {
  return (
    <header className="header">
      <div className="container navbar">
        <NavLink
          to="/"
          className="logo"
          aria-label="MiPortafolio, ir a Inicio"
        >
          MiPortafolio<span aria-hidden="true">.</span>
        </NavLink>

        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            {enlaces.map(({ ruta, nombre }) => (
              <li key={ruta}>
                <NavLink to={ruta} end={ruta === "/"}>
                  {nombre}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header