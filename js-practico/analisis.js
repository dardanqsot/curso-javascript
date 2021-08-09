const salarioCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);


const salariosColSorted = salarioCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    // if (numerito % 2 ===0) {
    //     return true;
    // }else {
    //     return false;
    // }
    return(numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( //metodo de javascript para sumar los elementos que se le brinde, similar al ciclo for
        function (valorAcumuado = 0, nuevoElemento) {
            return valorAcumuado + nuevoElemento;
        }
    ); 
    const promedioLista1 = sumaLista1/lista1.length;

    return promedioLista1;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personitaMitad1,personitaMitad2);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10];
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice( //splice: similar a substring
    spliceStart,
    spliceCount,
    );

const medianaTop10Col =  medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);