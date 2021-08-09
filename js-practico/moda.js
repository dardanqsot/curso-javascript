const lista1 = [
    1,
    2,
    5,
    4,
    1,
    5,
    2,
    1,
]

const lista1 = {};

lista1.map( //ayuda a recorrer el array el map
    function(elemento) {
        if(lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1[elemento] = 1;
        }
    }
); 

const lista1Array = Object.entries(lista1Count).sort(  //entries para convertir objeto en array
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

