import TarjetaProyecto from "../components/TarjetaProyecto";

function Proyectos() {
    const proyectos = [
  {
    titulo: "Web para palaeta de colores",
    descripcion: "Una web que muestra una paleta de colores monocromatica.",
    enlace: "https://github.com/CMardones06/26-08",},
  {
    titulo: "Animacion de integrales definidas",
    descripcion: "Una animacion que muestra la resolucion de integrales definidas.",
    enlace: "https://github.com/CMardones06/EID-CalculoIntermedio-G06",
  },
  {
    titulo: "Portafolio personal",
    descripcion: "Un portafolio web base para mostrar proyectos y habilidades.",
    enlace: "https://github.com/CMardones06/frontend-portafolio",
  }
    ]

    return (
    <div>
        <h1>Proyectos</h1>
        {proyectos.map((proyecto) => (
        <TarjetaProyecto
        key={proyecto.enlace}
        titulo={proyecto.titulo}
         descripcion={proyecto.descripcion}
         enlace={proyecto.enlace}
  />
))}
  </div>
);  

}

export default Proyectos