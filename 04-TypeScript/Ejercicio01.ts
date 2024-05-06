// Tipos de Datos
// Sintaxis declaración de variable:
// NombreVariable : tipo
var nombre : String = "Mau";
var edad : number = 30;
var programador : boolean = true;
var lenguajes : Array<String> = ["C","C++", "Javascript", "Python"];
var pareja : [String, number] = ["edad", 30];

enum meses {Enero, Febrero, Marzo, Abril, Mayo, Junio};
var calendario : meses = meses.Abril;
var nada : void = undefined;
var temporal : any = edad;

var Null : null = null;
var Undefined : undefined = undefined;

document.getElementById("output")?.innerHTML = nombre + "Edad: " + edad + ", programa en " + lenguajes[1];