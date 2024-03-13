const {Module} = require('module');

const argv = require('yargs')
            .option('b',{
                alias:'base',
                demandOption: true,
                default: 5,
                describe:'Base de la tabla de multiplicar',
                type: 'number'
            })
            .option('l',{
                alias:'limite',
                demandOption: true,
                default: 10,
                describe:'limite de la tabla de multiplicar',
                type: 'number'
            })
            .option('listar',{
                alias:'listar',
                demandOption: false,
                default: false,
                describe:'Mostrar la tabla',
                type: 'boolean'
            })
            .check((argv, option) => {
                if (isNaN(argv.base)) {
                    throw 'El argumento base no es un número'
                }else if (isNaN(argv.limite)){
                    throw 'El argumento limite no es un número'
                }
                else{
                    return true;
                }
            })
            .argv;

module.exports = {
    argv
};
