function saludar(nombre, genero, edad, idioma) {
  let saludo = "";

  if (idioma === 'espanol') {
    switch(genero) {
      case 'masculino':
        saludo = edad > 30 ? "Sr." : "Joven";
        break;
      case 'femenino':
        saludo = edad > 30 ? "Sra." : "Señorita";
        break;
      case 'otro':
        saludo = "";
        break;
    }
    return `Hola ${saludo} ${nombre}`;
  }

  if (idioma === 'ingles') {
    switch(genero) {
      case 'masculino':
        saludo = edad > 30 ? "Mr." : "Young";
        break;
      case 'femenino':
        saludo = edad > 30 ? "Mrs." : "Miss";
        break;
      case 'otro':
        saludo = "";
        break;
    }
    return `Hello ${saludo} ${nombre}`;
  }

  // Si el idioma no es español ni inglés
  return `Hola ${nombre}`;
}

export default saludar;
