const color = require('colors');
const {inquirerMenu, capturaEntrada,pausa} = require('./js/inquirer');
const Busqueda = require('./modelos/busquedas');

const main = async() => {
    let resp;
    const busqueda = new Busqueda();
    do{
        resp = await inquirerMenu();
        switch (resp) {
            case 1: break;
            case 2: break;

        }
        if (resp == 0){
            await pausa();
        }
    }while (resp !== 0)
};

main();