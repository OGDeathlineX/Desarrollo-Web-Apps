// Clase ECMAscript
class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const Juan = new Persona('Juan','32');
Juan.saludo();