var _a;
// Tipos de Datos
// Sintaxis declaración de variable:
// NombreVariable : tipo
var nombre = "Mau";
var edad = 30;
var programador = true;
var lenguajes = ["C", "C++", "Javascript", "Python"];
var pareja = ["edad", 30];
var meses;
(function (meses) {
    meses[meses["Enero"] = 0] = "Enero";
    meses[meses["Febrero"] = 1] = "Febrero";
    meses[meses["Marzo"] = 2] = "Marzo";
    meses[meses["Abril"] = 3] = "Abril";
    meses[meses["Mayo"] = 4] = "Mayo";
    meses[meses["Junio"] = 5] = "Junio";
})(meses || (meses = {}));
;
var calendario = meses.Abril;
var nada = undefined;
var temporal = edad;
var Null = null;
var Undefined = undefined;
(_a = document.getElementById("output")) === null || _a === void 0 ? void 0 : _a.innerHTML = nombre + "Edad: " + edad + ", programa en " + lenguajes[1];
