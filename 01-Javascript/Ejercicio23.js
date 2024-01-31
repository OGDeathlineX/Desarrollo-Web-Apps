function mapforEach(arr, fn) {
    var arr2 = [];
    for(var i = 0; i < arr.length; i++) {
        arr2.push( fn(arr[i]) );
    }
    return arr2;
};

var arreglo = [ 1, 2, 3];

var arreglo1 = mapforEach( arreglo, function(valor) {
    return valor * 2;
});

var arreglo2 = mapforEach( arreglo, function(valor) {
    return ((valor % 2) === 0 )
});

console.log(arreglo);
console.log(arreglo1);
console.log(arreglo2);