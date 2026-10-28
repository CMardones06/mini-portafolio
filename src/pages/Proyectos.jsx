function Proyectos() {
  return (
  <div>
    <h1>Proyectos</h1>
    const proyectos = [
  {
    nombre: "Proyecto 1",
    descripcion: "Descripción del proyecto 1",
    enlace: "https://github.com/CMardones06/26-08",},
  {
    nombre: "Proyecto 2",
    descripcion: "Descripción del proyecto 2",
    enlace: "https://github.com/CMardones06/EID-CalculoIntermedio-G06",
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Descripción del proyecto 3",
    enlace: "https://github.com/CMardones06/frontend-portafolio",
  }
    ]

  </div>
  )
};

return (
  <div>
    <h1>Proyectos</h1>
    {proyectos.map((proyecto, index) => (
      <TarjetaProyecto key={index} proyecto={proyecto} />
    ))}
  </div>
);  

export default Proyectos