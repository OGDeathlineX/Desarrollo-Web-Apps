// callbacks Hell
const empleados = [
    {
        id: 1,
        nombre: "Roberto"
    },
    {
        id: 2,
        nombre: "Jorge"
    },
    {
        id: 3,
        nombre: "Pedro"
    },
    {
        id: 4,
        nombre: "Susana"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2000
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;
    if (empleado) {
        callback(null, empleado) ;
    } else {
        callback( `El empleado con id ${ id } no existe`);
    }   
};

const getSalario = (id, callback) => {
    const salario = salarios.find( s => s.id === id )?.salario;
    if (salario) { 
        callback(null, salario);
    } else {
        callback(`El salario para el id ${ id } no existe`);
    }
};

let id = 6;

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El empleado ${empleado} gana ${salario}.`);
    });
});