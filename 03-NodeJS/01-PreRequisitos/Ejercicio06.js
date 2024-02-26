//CallBack 2
let getUsuariobyId = (id, callback) => {
    let usuario = {
        nombre: "Mau",
        id
    };
    if (id === 20) {
        console.log(`El usuario con id: ${id} no existe en la base de datos`);
    } else {
        callback(null,usuario);
    }  
};

getUsuariobyId(2, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Usuario en base de datos: `, usuario);
    }
})