/**
 * Includes
 */
 let numbers = [1, 2, 3, 7, 8];
 const VALUE = 7;
 
 if (numbers.includes(VALUE)) {  /// el includes es como el contains de java
   console.log(`Sí se encuentra el valor ${VALUE}`);
 } else {
   console.log(`No se encuentra el valor ${VALUE}`);
 }
 
 /**
  * Pow
  */
 let base = 4;
 let exponent = 4;
 let result = base ** exponent; // es igual a usar potencia
 console.log(`Result -> ${result}`);