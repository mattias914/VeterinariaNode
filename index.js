const {registrar , leer} = require('./operaciones.js');

const arguments = process.argv.slice(2);

const [operacion, nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal] = arguments;

if (operacion === 'registrar') {
  registrar(nombreAnimal,edadAnimal,tipoAnimal,colorAnimal,enfermedadAnimal);
}

if (operacion === 'leer') {
  leer();
}