import { useEffect, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const titulos = {
  "/": "Inicio",
  "/sobre-mi": "Sobre mí",
  "/habilidades": "Habilidades",
  "/proyectos": "Proyectos",
  "/contacto": "Contacto",
}

function Layout() {
  const { pathname } = useLocation()
  const contenido = useRef(null)

  useEffect(() => {
    document.title =
      `${titulos[pathname] || "Página no encontrada"} | Camila Mardones`

    window.scrollTo(0, 0)
    contenido.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido" ref={contenido} tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout