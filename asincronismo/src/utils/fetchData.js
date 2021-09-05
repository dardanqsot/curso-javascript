let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //es la forma antigua de hacer llamados, 
//let API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api) => {
     return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) {
                (xhttp.status === 200)  // se quita el if xq no es necesario en operaciones ternarias como en este caso
                 ? resolve(JSON.parse(xhttp.responseText))
                 : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
     });
}

module.exports = fetchData; // por usar node