import { NavLink } from "react-router-dom"

function Header() {

    <ul>
      <li><NavLink to="/" end>Inicio</NavLink></li>
      <li><NavLink to="/sobremi">Sobre Mí</NavLink></li>
      <li><NavLink to="/habilidades">Habilidades</NavLink></li>
      <li><NavLink to="/proyectos">Proyectos</NavLink></li>
      <li><NavLink to="/contacto">Contacto</NavLink></li>
    </ul>
}

export default Header