const fs = require('fs');

const registrar = (nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal) => {
  const contenidoExistente = fs.readFileSync('citas.json', 'utf-8');
  const datos = JSON.parse(contenidoExistente);

  datos.push({
    nombre: nombreAnimal,
    edad: edadAnimal,
    tipo: tipoAnimal,
    color: colorAnimal,
    enfermedad: enfermedadAnimal,
  });

  let nuevoContenido = JSON.stringify(datos,null,2);

  fs.writeFileSync('citas.json',nuevoContenido)

  console.log(`Animal ${nombreAnimal} registrado con éxito.`);
};

const leer = () => {
  const contenido = fs.readFileSync('citas.json', 'utf-8');
  console.log(contenido);
};

module.exports = { registrar , leer };
