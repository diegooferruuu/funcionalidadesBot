import saludar from "./saludador";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre =` ${input.value}`;

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
