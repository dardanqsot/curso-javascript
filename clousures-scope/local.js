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
