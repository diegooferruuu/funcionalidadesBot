function saludar(nombre, genero) {
  let saludoGenero = "";
  
  switch(genero) {
      case 'masculino':
          saludoGenero = "Sr.";
          break;
      case 'femenino':
          saludoGenero = "Sra.";
          break;
      case 'otro':
          saludoGenero = "";
          break;
  }
  
  return `Hola ${saludoGenero} ${nombre}`;
}

export default saludar;
