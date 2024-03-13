const {crearArchivo} = require('./modulos/multiplicar');
const {argv} = require('./modulos/argv');

console.clear();


// const [,,arg3 = '--base=5', arg4 = '--limite=15'] = process.argv;

// const [,base,] = arg3.split('=');

// const [,limite,] = arg4.split('=');

console.log(argv);
console.log(process.argv);

const base =argv.base;

const limite =argv.limite;

const listar =argv.limite;

console.log(base);

console.log(base, limite);

crearArchivo(base, limite, listar)
        .then((nombreArchivo) => {console.log(nombreArchivo, " creado");})
        .catch((err) =>{console.log(err);});

