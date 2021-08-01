
// Este el c+odigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Este el código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo1 + "cm, "
//     + baseTriangulo + "cm"
//     );

// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo= (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd();


// Este el código del circulo
console.group("Circulo");
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo*2;
const PI = Math.PI;//3.1415;

// console.log("El radio del círculo es: " + radioCirculo + "cm");
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
// console.log("PI es: " + PI);


// const perimetroCirculo = diametroCirculo * PI;  
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// const areaCirculo= (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

function diametroCirculo(radio) {
    return radio*2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí intereactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}