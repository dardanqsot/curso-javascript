var miNombre;
miNombre = "Darwin";

console.log(miNombre2); //Llamo a mi variable antes de ser declarada y ser inicializada 
var miNombre2 = "Daniel";
/************/
hey();  //en este caso si llamará al contenido de la función pero no a la variable.

function hey(){
    console.log("Hola " + miApellido);
}
var miApellido = "Quispe";
