import { NavLink } from "react-router-dom"

function Header() {
    return (
    <div>
      <h1>Camila Mardones</h1>
    <ul>
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