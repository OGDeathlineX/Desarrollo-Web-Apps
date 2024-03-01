// import {fs} from 'node:fs';
const { crearArchivo } = require('./modulos/multiplicar')

console.clear();

let base=5;

crearArchivo(base)
    .then((nombreArchivo) => {console.log(nombreArchivo,"creado con éxito!");})
    .catch((err) => {console.log(err);});