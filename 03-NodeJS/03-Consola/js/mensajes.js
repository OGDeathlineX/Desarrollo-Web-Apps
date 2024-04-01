const colors = require ('colors');
const {Module} = require('module');

const mostrarMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log("====================".green);
        console.log("Seleccione una opción".green);
        console.log("====================".green);
        console.log("");
        console.log(`${"1.".green} Crear Tarea`);
        console.log(`${"2.".green} Listar Tareas`);
        console.log(`${"3.".green} Listar Tareas Terminadas`);
        console.log(`${"4.".green} Listar Tareas Pendientes`);
        console.log(`${"5.".green} Completar Tarea`);
        console.log(`${"6.".green} Borrar Tarea`);
        console.log(`${"0.".green} Salir`);
    
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readline.question('Seleccione una opción: ', (opc) => {
            readline.close();
            resolve(opc);
        });
    });+

};

const pausa = () =>{
    return new Promise ((resolve)=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readline.question(`Presione ${"enter".red} tecla para continuar`, (opc) => {
            readline.close();
            resolve(opc);
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}