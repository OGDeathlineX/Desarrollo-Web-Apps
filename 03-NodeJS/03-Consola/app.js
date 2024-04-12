const colors = require('colors');
const { inquirerMenu, 
        pausa, 
        capturaEntrada, 
        listadoTareasBorrar,
        confirm,
        listadoSeleccionar } = require('./js/inquirer'); 
const Tareas = require('./modelos/tareas');
const Tarea = require('./modelos/tarea');
const { guardaBase, cargaBase } = require('./js/guardabase');

const main = async () => { 
    let opc = '';
    tareas = new Tareas();
        do {
        opc = await inquirerMenu();
        const tareasdb = await cargaBase();
        if (tareasdb) {
            await tareas.cargarListado(tareasdb);
        }

        switch (opc) {
            case 1: const resp = await capturaEntrada('Descripción: ');
                    console.log(resp);
                    tareas.crearTarea(resp); 
                    break;
            case 2: tareas.imprimeTareas(); break;
            case 3: tareas.imprimirPendientesCompletadas(true); break;
            case 4: tareas.imprimirPendientesCompletadas(false); break;
            case 5: const comp = await listadoSeleccionar(tareas.listadoArr);
                    console.log(comp);        
                    tareas.cambiaTareas(comp);
                    break;
            case 6: const id = await listadoTareasBorrar(tareas.listadoArr); 
                    if(id === 0 ) break;
                    const ok = await confirm('¿Desea Borrar la tarea?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada'.green);
                    }
                    
                    break
        
            default:
                break;
        }
        guardaBase(tareas.listadoArr);

        if (opc !== 0) {
            await pausa();
        }
    } while (opc != 0);
};

main();