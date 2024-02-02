function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
};

Persona.prototype.getFullName = function(){
    return this.nombre + " " + this.apellido;
}

var juan = new Persona("juan", "perez");
var pedro = new Persona("pedro", "parker");

console.log(juan.getFullName());
console.log(pedro.getFullName());