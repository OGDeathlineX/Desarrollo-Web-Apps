const colors = require('colors');
const {inquirerMenu, pausa} = require('./js/inquirer')
const Tareas = require('./modelos/tareas');
const Tarea = require('./modelos/tarea');

const main = async() => {
    let opc = '';
    tareas = new Tareas();
    do{
        opc = await inquirerMenu();
        switch (opc) {
            case 1:
                tareas.crearTarea();
                break;
            case 2:
                console.log(tareas.listado);
                break;
        
            default:
                break;
        }

        console.log(opc);
    }while(opc != '0');

    tarea = new Tarea("Bailar Salsa con un Perro Chalchicha");
    console.log(tarea);


    await pausa();
};

main();