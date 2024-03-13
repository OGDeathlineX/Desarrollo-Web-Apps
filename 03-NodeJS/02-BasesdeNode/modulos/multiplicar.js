const fs = require('node:fs');
const {Module} = require('module');
const colors = require('colors');


const crearArchivo = async(base = 5, limite = 15) =>
{
    return new Promise((resolve, reject) => {
        let salida = "";

        console.log("======================".green);
        console.log(`Tabla del ${base}`.green);
        console.log("======================".green);

        for (let i = 0; i <= limite; i++) 
            salida += `${base}`.yellow+` *`.grey+` ${i}`.yellow+` =`.grey+` ${base * i}`.yellow+`\n`;

        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            resolve(`tabla-${base}.txt`);
        }); 

        console.log(salida);
    });
}  

module.exports = {
    crearArchivo
};
