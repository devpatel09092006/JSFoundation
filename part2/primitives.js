//Number 

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance); // 120
// console.log(anotherBalance.valueOf()); // [Number: 120]

// console.log(typeof balance); // number
// console.log(typeof anotherBalance); // object



// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // Not recoomnded



// Null and Undefined

let firstName = null;
let lastName = undefined;
// console.log(firstName); // null
// console.log(lastName); // undefined



//  String

let myString = 'Hello';
let myString1 = 'Hola';
let userName = 'Dev Patel';

let oldGreet = myString + " Dev Patel";
// console.log(oldGreet); // Hello WorldDev Patel

let greetMessage = `Hello ${userName} !`;
let  demoOne = `VALUE IS ${2 * 2}`;

// console.log(demoOne); // VALUE IS 4
// console.log(greetMessage); // Hello Dev Patel !



// Symbol

let symbolOne = Symbol();
let symbolTwo = Symbol();

console.log(symbolOne === symbolTwo); // false
console.log(symbolOne); // Symbol()  
