// Funciones
function regresaNumero(numero : number): number{
    return numero;
};


var numero1: number;
var numero2: number;

numero1 = regresaNumero(5);
numero2 = regresaNumero(6);

document.getElementById("Output")?.innerHTML = "Numero 1 = " + numero1 + ", Numero 2 = " + numero2;