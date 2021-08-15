const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);  // acceso a variables locales
}

helloWorld();
console.log(hello);  // error xq la variable no existe globalmente


var scope = 'Iam global';
const functionScope = () => {
    var scope = 'Iam just a local';  // se le conoce como ámbito léxico
    const func = () => {
        return scope;
    }
    console.log(func());
};

functionScope();


const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();
console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;    // let y const no pueden ser reasignadas una vez declaradas.
    console.log(x);
    console.log(y);
}


///scope en bloques: dentro de llaves

const fruits = () => {
    if(true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruist3 = 'kiwi';
    }

    console.log(fruits1); // IMPRIMIRA NORMAL A PESAR DE ESTAR DENTRO DE IF POR SER UN BLOQUE
    console.log(fruits2); // PERO SI CAMBIO DE VAR A LET O CONST NO LO PERMITIRA
    console.log(fruits3);
}


const anotherFunction = () => {
    for (var i = 0; i<10 ; i++) {  // en caso sea una variable tipo var para este ejemplo solo arrancara con el valor 10
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}