const lista1 = [
    100,
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista){
    // let sumaLista1 = 0;

    // for(let i=0; i< lista1.length; i++){
    //     sumaLista1 = sumaLista1 + lista1[i];
    // }
    
    const sumaLista = lista.reduce( //metodo de javascript para sumar los elementos que se le brinde, similar al ciclo for
        function (valorAcumuado = 0, nuevoElemento) {
            return valorAcumuado + nuevoElemento;
        }
    ); 
    const promedioLista1 = sumaLista1/lista1.length;

    return promedioLista1;
}

//ejecucion: calcularMediaAritmetica ([1,14,154,10000])