import { useState } from "react";

function FormularioContacto() {
    return (
        <form>
            <label id="label-nombre" htmlFor="nombre">Nombre:</label>
            <input id="nombre" type="text" name="nombre" required />   
            <label id="label-email" htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required />
            <label id="label-mensaje" htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormularioContacto;