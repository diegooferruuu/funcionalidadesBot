import saludar from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('saludoForm');
    const saludoDiv = document.getElementById('saludo');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario recargue la página
        
        const nombre = document.getElementById('nombre').value;
        const genero = document.getElementById('genero').value;
        
        saludoDiv.innerHTML = `<p>${saludar(nombre, genero)}</p>`;
    });
});
