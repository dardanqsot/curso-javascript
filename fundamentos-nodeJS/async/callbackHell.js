function hola(nombre, miCallback) {
    //console.log('Hola, soy una función asicrona');
    setTimeout(function () {
        console.log("HOLA, " + nombre);
        miCallback(nombre);
    },1500);
}

function hablar(callbackHablar) {
    setTimeout(function(){
        console.log("Bla bla bla..");
        callbackHablar();
    },1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log("Adios, " + nombre);
        otroCallback();
    },1000);
}

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function(){
            conversacion( nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log("Iniciando proceso");
hola('Darwin' , function(nombre){
    conversacion(nombre, 3, function(nombre){
        console.log('Proceso Terminado');
    });
});
/* hola('Darwin' ,function() {
    adios('Darwin', function() {
        console.log("Terminamos");
    })
});
 */

/* console.log('Iniciando proceso...');
hola('Darwin' ,function() {
    hablar(function() {
        adios('Darwin' , function() {
            console.log('Terminando proceso ...');
        });
    })
});
 */