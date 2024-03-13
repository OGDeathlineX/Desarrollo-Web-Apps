const colors = require('colors');
const {mostrarMenu, pausa} = require('./js/mensajes')

const main = async() => {
    let opc = '';
    do{
        opc = await mostrarMenu();
    }while(opc != '0');

    pausa();
};

main();