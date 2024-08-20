import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('saludoForm');
    const saludoDiv = document.getElementById('saludo');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const genero = document.getElementById('genero').value;
        const edad = document.getElementById('edad').value;
        
        saludoDiv.innerHTML = `<p>${saludar(nombre, genero, edad)}</p>`;
    });
});
