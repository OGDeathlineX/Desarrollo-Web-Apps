require('dotenv').config();
const colors = require('colors');
const { inquirerMenu, capturaEntrada, pausa, listadoCiudades } = require('./js/inquirer');
const Busqueda = require('./modelos/busquedas');

const main = async () => {
    let resp;
    const busqueda = new Busqueda();
    busqueda.cargaBase();
    do {
        resp = await inquirerMenu();
        switch (resp) {
            case 1: const lugar = await capturaEntrada("Ciudad: ");
                    const lugares = await busqueda.ciudad(lugar); 
                    const id = await  listadoCiudades(lugares);
                    if (!id) {
                        break
                    }
                    const lugarSeleccionado = lugares.find( ciudad => ciudad.id === id);
                    busqueda.guardarBusquedas(lugarSeleccionado.lugar);
                    const clima = await busqueda.climaCiudad(lugarSeleccionado.lat, lugarSeleccionado.lon); 
                    // Impresión del lugar seleccionado:
                    console.log(`\n${'Ciudad: '.yellow}: ${lugarSeleccionado.lugar} `);
                    console.log(`${'Latitud: '.yellow}: ${lugarSeleccionado.lat} `);
                    console.log(`${'Longitud: '.yellow}: ${lugarSeleccionado.lon} `);
                    console.log(`${'Clima: '.yellow}: ${clima.desc} `);
                    console.log(`${'Temperatura: '.yellow}: ${clima.temp} centigrados`);
                    console.log(`${'Sensación termica: '.yellow}: ${clima.real} centigrados`);
                    console.log(`${'Temperatura Mínima: '.yellow}: ${clima.min} centigrados`);
                    console.log(`${'Temperatura Máxima: '.yellow}: ${clima.max} centigrados`);
                    await pausa();
                    break;
            case 2: 
                let cont = 1;
                busqueda.historial.forEach((lugar) => {
                    console.log(`${cont.toString().green}.${lugar}`);
                    cont++;
                });
                await pausa();
                break;
        }
        busqueda.guardaBase();
        if (resp === 0) {
            await pausa();
        }
    } while (resp !== 0);
};

main();