//LOOPS:
var estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola , ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
    //console.log(estudiantes[i]);
}

for(var estudiante of estudiantes){ //FOR EACH
    saludarEstudiantes(estudiantes[i]);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); //saca un elemento mediante un loop  (lentgth -1)
    saludarEstudiantes(estudiante);
}
/*
for - recorre un bloque de código varias veces

for/in - recorre las propiedades de un objeto

for/of - recorre los valores de un objeto iterable

while - recorre un bloque de código mientras se cumple una condición específica

do/while - también recorre un bloque de código mientras se cumple una condición específica

*/