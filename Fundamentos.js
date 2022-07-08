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