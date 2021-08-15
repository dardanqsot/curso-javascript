const buildCount = () => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();


const  myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();


// variables privadas gracias a closures

const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('DARWIN');
console.log(newPerson.getName());

/// LOOPS:

const anotherFunction = () => {
    for (var i = 0; i<10 ; i++) {  // en caso sea una variable tipo var para este ejemplo solo arrancara con el valor 10
        console.log("dentro de for: " + i);
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

console.log(anotherFunction());