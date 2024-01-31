console.log(this);

function b() {
    console.log(this);
}

b();

var obj = {
    nombre: "Objeto",
    fun: function() {
        console.log(this);
        console.log(this.nombre);
    }
};

obj.fun();