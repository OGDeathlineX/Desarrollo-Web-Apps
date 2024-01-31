var Persona = {
    nombre: "Juanito",
    apellido: "Pérez",
    getNombre: function(lang) {
        var nombreCompleto = this.nombre + ' ' + this.apellido + "(" + lang + ")";
        return nombreCompleto;
    }
};

var Persona2 = {
    nombre: "Pedrita",
    apellido: "López"
};

console.log(Persona.getNombre.apply(Persona2,["es"]));