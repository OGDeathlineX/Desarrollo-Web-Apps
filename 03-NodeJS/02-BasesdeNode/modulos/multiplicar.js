const fs = require('node:fs');
const {Module} = require("module");

const crearArchivo = (base = 5) => {
    return new Promise((resolve,reject) => {
        let salida = "";
    
        console.log("====================");
        console.log(`Tabla del ${base}`);
        console.log("====================");
    
        for (let i = 1; i <= 10; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
        }
    
    
        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) reject(err);
        resolve(`¡Archivo tabla-${base}.txt`);
        });    
        console.log(salida);
    });
    
};

module.exports = {
    crearArchivo
}