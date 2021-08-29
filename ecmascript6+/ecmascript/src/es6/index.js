//DEFAULT PARAMS Y CONCATENACION

function newFunction(name, age, country) {
    var name = name || 'darwin';
    var age = age || 27;
    var country = country || 'PE';
    console.log(name, age, country);
}


//es6
 function newFunction2(name = 'darwin', age = 27, country = "PE"){
    console.log(name, age, country);
 }

 newFunction2();
 newFunction2('Ricardo', 23, 'CO');

 //TEMPLATE 

 let hello = "Hello";
 let world = "World";
 let epicPhrase =  hello + ' '  + world;
 console.log(epicPhrase);

 let epicPhrase2 = `${hello} ${world}` //templates literals: comillas francesas
 console.log(epicPhrase2);

 let lorem = "ESTA ES UNA FRASE DE Ejemplo para probar multilinea con contraslash n \n"
 + "como ejemplo este parrafo";

 let lorem2 = `ESTA ES UNA FRASE DE Ejemplo para probar multilinea con contraslash n 
 como ejemplo este parrafo`;

 console.log(lorem);
 console.log(lorem2);

// desestructuracion
 let person = {
     'name': 'darwin',
     'age': 27,
     'country': 'PE'
 }

 console.log(person.name, person.age);

 let {name, age, country} = person;

 console.log(name, age, country);

 //PROPAGACION
 let team1 = ['darwin', 'Daniel', 'Juan'];
 let team2 = ['Valeria', 'Yesica', 'Camila'];

 let education = ['David', ...team1, ...team2];

 console.log(education);

 //ARrow functions , Promesas y parámetros en objetos
 let nombre = 'darwin';
 let age = '27';

 obj = { name: nombre, age : age};

 obj2 = { nombre, age };

 console.log( obj);

 // arrow functions:

 const names = [
     {name: 'Darwin', age: 27},
     {name: 'Yesisca', age: 25}
 ]

 let listOfNames = names.map( function(item){
    console.log(item.name);
 })

 let listOfNames2 = names.map(item => console.log(item.name))
/* funcion ejemplo a usar
 const listOfNames3 = (name, age, country) => {
     ...
 }
 */

 //PROMESAS: ALGO VA A pasar
  
 const helloPromise = () => {
     return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey')
        } else {
            reject(' Ups!! ');
        }
     });
 }

 helloPromise()
 .then(response => console.log(response))
 .then(() => console.log('hola'))
 .catch(error => console.log(error));

 //Clases, Modulos y Generadores

 class calculator{
     constructor(){
         this.valueA = 0;
         this.valueB = 0;
     }
     sum(valueA, valueB){
         this.valueA = valueA;
         this.valueB = valueB;
         return this.valueA + this.valueB;
     }
 }

 const calc = new calculator();
 console.log(calc.sum(2,2));

 import { hello } from './module';
 hello();

 //Generators

 function* helloWorld() {
     if(true){
         yield 'Hello, ';
     }
     
     if(true) {
         yield 'World';
     }
 };

 const generatorHello = helloWorld();
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);



