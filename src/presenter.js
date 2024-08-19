import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const nombre = prompt("¿Cuál es tu nombre?");
    const divSaludo = document.getElementById('saludo');
    divSaludo.innerHTML = `<p>${saludar(nombre)}</p>`;
});
