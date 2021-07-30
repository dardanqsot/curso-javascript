var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 },
];

// Método Filter
var articulosFiltrados = articulos.filter(function(articulo) {  //agrega a un nuevo array los articulos que cumplan la condicion de abajo
	return articulo.precio <= 500;
});

// Método Map
var nombreArticulos = articulos.map(function(articulo) {  //para solo traer las propiedades que se desea retornar.
	return articulo.nombre;
});

articulosFiltrados;
// (2) [{…}, {…}]
//   0: {nombre: "⌨️", precio: 100}
//   1: {nombre: "🖱", precio: 70}

nombreArticulos; // (5) ["📱", "💻", "🖥", "⌨️", "🚗"]
//******************************/
/**/ 
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "⌨️";
});
encuentraArticulo;
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});
 
var articulosBaratos = articulos.some(function(articulo){  //retorna un booleano
    return articulo.costo <= 700;
});


var numeros = [1,2,3,4,5];
numeros.push[6,7];
numeros.shift(); //Eliminara el primer elemento de un array
