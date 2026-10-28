import { NavLink } from "react-router-dom"

function Header() {
    return (
    <div classname="navbar">
      <h1 classname="logo">Camila Mardones</h1>
    <ul classname="nav-links">
      <li><NavLink to="/" end>Inicio</NavLink></li>
      <li><NavLink to="/sobre-mi">Sobre Mí</NavLink></li>
      <li><NavLink to="/habilidades">Habilidades</NavLink></li>
      <li><NavLink to="/proyectos">Proyectos</NavLink></li>
      <li><NavLink to="/contacto">Contacto</NavLink></li>
    </ul>
    </div>
    )
}

export default Header