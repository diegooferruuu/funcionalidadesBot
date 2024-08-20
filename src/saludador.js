function saludar(nombre, genero, edad) {
  let saludo = "";
  
  switch(genero) {
      case 'masculino':
        if (edad > 30) {
          saludo = "Sr.";
        }
        else {
          saludo = "Joven";
        }
          break;
      case 'femenino':
        if (edad > 30) {
          saludo = "Sra.";
        }
        else {
          saludo = "Señorita";
        }
          break;
      case 'otro':
          saludo = "";
          break;
  }
  
  return `Hola ${saludo} ${nombre}`;
}

export default saludar;
