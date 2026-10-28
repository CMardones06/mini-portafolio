function TarjetaProyecto({ proyecto }) {
    return (
        <div className="tarjeta-proyecto">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </div>
    );
}

export default TarjetaProyecto;