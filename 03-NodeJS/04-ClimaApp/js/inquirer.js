const inquirer = require('inquirer');
const colors = require ('colors');

const menu = [
    {   
        type: 'list',
        name: 'menuOpt',
        message: 'Seleccione una opción: ',
        choices: [
            {
                value: 1,
                name: `1. Buscar Ciudad`
            },
            {
                value: 2,
                name: `2. Historial`
            },
            {
                value: 0,
                name: `0. Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
        console.clear();
        console.log("======================".green);
        console.log(" Seleccione una opción".green);
        console.log("======================".green);
        console.log("");

        const { menuOpt } = await inquirer.prompt(menu); 
        return menuOpt;
};

const pausa = async () => {
    await inquirer.prompt([{
        type: 'input',
        name: 'pauseOpt',
        message: `Presione ${'Enter'.red} para continuar...`
    }]);
};

const capturaEntrada = async (message) =>{
    respuesta = await inquirer.prompt([{
        type: 'input',
        name: 'resp',
        message,
        validate: (entrada) => {
            if (entrada.length === 0) {
                return 'Entrada inválida. Reintente'
            } else {
                return true;
            }
        }
    }]);
    return respuesta.resp;
};

const listadoCiudades = async (listado = []) => {
    let cont = 0;
    const choices = listado.map( (ciudad) => {
        cont++;
        return {
            value: ciudad.id,
            name: `${cont.toString().green}. ${ciudad.lugar.white}`,
            lat: ciudad.lat,
            lon: ciudad.lon
        }
    } );

    choices.unshift({
        value: 0,
        name: `${'0'.green}. ${'Cancelar'.yellow}`
    });

    const respuesta = await inquirer.prompt([{
        type: 'list',
        name: 'resp',
        message: "Seleccione una ciudad: ",
        choices
    }]);
    return respuesta.resp;
};

const confirm = async (message) => {
    const { ok } = await inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message
    }]);
    return ok;
};

const listadoSeleccionar = async (listado) => {
    const choices = listado.map( (tarea) => {
        return {
            value: tarea.id,
            name: tarea.descripción,
            checked: (tarea.completado) ? false : true
        }
    });
    const respuesta = await inquirer.prompt([{
        type: 'checkbox',
        name: 'resp',
        message: 'Marque las tareas completadas',
        choices
    }]);
    return respuesta.resp;
};


module.exports = {
    inquirerMenu,
    pausa,
    capturaEntrada,
    listadoCiudades,
    confirm,
    listadoSeleccionar  
};