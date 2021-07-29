
var a = 4 + "7";
typeof a;  // será string  -> implicita 

var b = 4 * "7";
typeof b; // 21 -> implicita el lenguaje lo convierte a número

var a = 20;
var b = a + "";
var c = String(a);
typeof c; // String porque obligamos a la variable a casterarlo a string es una coercion explicita

var d = Number(c);
typeof d; //Number  --> corcion explicita
