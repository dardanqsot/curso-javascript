var miAuto = {
    marca: "Toyota", //Propiedades   palabra_clave : valor
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); //this hace referencia al objeto glogal a este objeto.
    }
};

miAuto.marca; // Objeto.valor -> para acceder al valor de cada propiedad
miAuto.detalleDelAuto(); 


