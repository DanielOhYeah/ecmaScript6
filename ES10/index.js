let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]));
// 1 * 2 = 2
// 2 * 2 = 4        esto hacemos con el FlatMap <3


let hello = '       hello world'
console.log(hello);
console.log(hello.trimStart());  // corta los espacios jeje

try{

} catch {
    Error
}

let entries = [["name", "Daniel"], ["age", 18]];
console.log(Object.fromEntries(entries));


let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);
