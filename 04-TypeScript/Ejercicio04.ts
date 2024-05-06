class Persona2 {
    nombre: String;
    edad: number;

    constructor(nombre:string,edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    get Edad(): number {
        return this.edad;
    }
    set Edad(edad){
        this.edad =edad;
    }
    toString() : string{
        return "Nombre: " + this.nombre + ", " + this.Edad;
    }
}

var persona4 = new Persona2("Mauricio Solano Nájera", 22);

console.log(persona4.toString());
