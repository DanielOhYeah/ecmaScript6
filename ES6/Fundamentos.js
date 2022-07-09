// antesssss xd
function newFuction(name, age, country){
    var name = name || "Daniel";
    var age = age  || 18;
    var country = country || "CO";
    console.log(name, age, country);
}

newFuction();

// es6

function newFuction2(name='oscar', age=18, country="CO"){
    console.log(name, age, country);
}

// antesssss xd
let p1 = "Hello"
let p2 = "World"
let epicPhrase = p1 + ' ' + p2;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${p1} ${p2}`;
console.log(epicPhrase2);



// Parrafos :D
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque \n"   +           "mattis quam sit amet massa bibendum, nec ultrices tortor laoreet."
console.log(lorem);

// es6
let lorem2 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit  Quisque
mattis quam sit amet massa bibendum, nec ultrices tortor laoreet.`
console.log(lorem2);




let person = {
    'nick': 'Daniel',
    'age': 18,
    'country': 'Col'
}

console.log(person.nick, person.age);

let {nick,age} = person;
console.log(nick, age);



let team1 = ['oscar', 'julian', 'ricardo', 'eduux'];
let team2 = ['Daniel', 'Matias', 'Ander'];

let education = ['david', ...team1, ...team2];
console.log(education);


const names = [
    {name: 'Daniel', age: 18},
    {name: 'Two9', age: 20},
    {name: 'SteiH4xx', age: 19},
]

let listOfName = names.map(function (item) {
    console.log(item.name);
})

let listOfName2 = names.map(item => console.log(item.name));


const square = num => num * num;





class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,4));

const hello = require('../module')

console.log(hello());




function* helloWorld () {
    if(true) {
        yield 'Hello, ';
    } if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


