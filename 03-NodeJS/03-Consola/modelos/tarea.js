const { v4: uuidv4 } = require('uuid');

class Tarea {
    id = "";
    descripción = "";
    completado = null;

    constructor(desc) {
        this.id = uuidv4();
        this.descripción = desc;
        this.completado = null;
    }
}

module.exports = Tarea;