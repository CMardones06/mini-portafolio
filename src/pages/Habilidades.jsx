function Habilidades() {
  return ( <h1>Habilidades
  </h1>

  const listaHabilidades = [
    { id: 1, nombre: "HTML", nivel: "Avanzado" },
    { id: 2, nombre: "CSS", nivel: "Avanzado" },
    { id: 3, nombre: "JavaScript", nivel: "Intermedio" },
    { id: 4, nombre: "React", nivel: "Intermedio" },
    { id: 5, nombre: "Node.js", nivel: "Básico" },
  ];

  const herramientas = [
    { id: 1, nombre: "Git", nivel: "Intermedio" },
    { id: 2, nombre: "GitHub", nivel: "Intermedio" },
    { id: 3, nombre: "Visual Studio Code", nivel: "Avanzado" },
    { id: 4, nombre: "Figma", nivel: "Básico" },
  ];

  return (
    <div>
      <h1>Habilidades</h1>
      <h2>Tecnologías</h2>
      <ul>
        {listaHabilidades.map((habilidad) => (
          <li key={habilidad.id}>
            {habilidad.nombre} - {habilidad.nivel}
          </li>
        ))}
      </ul>
      <h2>Herramientas</h2>
      <ul>
        {herramientas.map((herramienta) => (
          <li key={herramienta.id}>
            {herramienta.nombre} - {herramienta.nivel}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Habilidades