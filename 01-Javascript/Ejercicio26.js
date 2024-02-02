var a = 3;
console.log(typeof a);

var b = "Holiii";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));

function Persona(nombre){
    this.nombre = nombre;
};

var e = new Persona("Mau");
console.log(typeof e);
console.log(e instanceof Persona);

console.log(typeof undefined);
console.log(typeof null);
console.log(null);
