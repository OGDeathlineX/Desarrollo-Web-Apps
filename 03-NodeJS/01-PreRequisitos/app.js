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

const getEmpleado = (id) => {
    return promise = new Promise ( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id )?.nombre;
        (empleado) ? resolve(empleado): reject( `El empleado con id ${ id } no existe`);
    });
};

const getSalario = (id) => {
    return promise = new Promise ((resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        (salario) ? resolve(salario): reject(`El salario para el id ${ id } no existe`);
    });
};

// Forma errónea
// getEmpleado(id, (err, empleado) => {
    //     if (err) {
        //         return console.log(err);
        //     }
        //     getSalario(id, (err, salario) => {
            //         if (err) {
                //             return console.log(err);
                //         }
                //         console.log(`El empleado ${empleado} gana ${salario}.`);
                //     });
                // });
                
                // getEmpleado(id)
                //     .then((empleado) => {console.log(empleado)})
                //     .catch((err) => {console.log(err);});
                
                // getSalario(id)
                //     .then((salario) => {console.log(salario)})
                //     .catch((err) => {console.log(err);});

let id = 4;
let emp

// Primer Simplificación
// getEmpleado(id)
//     .then((empleado) => { 
//         getSalario(id)
//         .then((salario) => {console.log(empleado, `gana un sueldo de $`,salario)})
//         .catch((err) => {console.log(`El empleado ${empleado} no tiene un salario.`);});

//     })
//     .catch((err) => {console.log(err);});

// Segunda Simplificación
// getEmpleado(id).then((empleado)=> {
//     emp = empleado;
//     return getSalario(id);} ).then((salario) => {
//         console.log(`El empleado ${emp} tiene un salario de $${salario}.`);})
//     .catch((err)=>{console.log(err);});

getInfoUsuario = async (id) =>  {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado ${empleado} tiene un salario de $${salario}.`;
};

getInfoUsuario(id)
            .then((empleado) => {console.log(empleado)})
            .catch((err) => {console.log(err);});