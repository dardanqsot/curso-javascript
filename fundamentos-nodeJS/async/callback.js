function hola(nombre, miCallback) {
    //console.log('Hola, soy una función asicrona');
    setTimeout(function () {
        console.log("HOLA, " + nombre);
        miCallback();
    },1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log("Adios, " + nombre);
        otroCallback();
    },1000);
}

console.log('Iniciando proceso...');
hola('Darwin' ,function() {
    adios('Darwin' , function() {
        console.log('Terminando proceso ...');
    });
});
