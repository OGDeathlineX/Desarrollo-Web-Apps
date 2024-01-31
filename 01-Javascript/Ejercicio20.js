var Persona = {
    nombre: "Juan",
    apellido: "Pérez",
    getNombre: function(lang) {
        var nombreCompleto = this.nombre + ' ' + this.apellido + "(" + lang + ")";
        return nombreCompleto;
    }
};

var logNombre = function(lang) {
    console.log("Logged: " + this.getNombre(lang) );
};

logNombre.call(Persona,"es");
