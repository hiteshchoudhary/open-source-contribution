/*
    1. There are two types :
        a. Primitive Types
        b. References Types

    Primitive Types:
        1. string
        2. Number
        3. Boolean
        4. Null
        5. Undefined
        6. Symbol
        7. BigInt

    References Types:
        1. Array
        2. Objects
        3. Functions
*/

// string
const firstName = 'John';

// Number
const age = 25;
const temp = 45.3;

// Boolean
const hasCars = true;

// Null
const aptNumber = null;

// undefined
const score = undefined;

// symbol: represents unique identifier
const id = Symbol('id');

// Big Int
const n = 90000007199994999n;

// references data types
// Arrays
const numbers = [1, 2, 3, 4, 5];
//object
const person = {
  name: 'Indrajeet',
  age: '25',
};
person.name = 'john';
//function
// const sayHello = function () {
//   console.log('Hello');
// };

// sayHello();

let output = person;

// console.log(output, typeof output);

// Operators
// 1. Arithmetic operators

let x;
x = 5 + 5;
x = x - 5;
x = x * x;
x = x / 5;
x = x % 2;
x = x ** 3;
x = 10;
x++; // x = x+1;

x = 16;
--x; // x = x-1

// Concatenation
let y = 'Hello' + 'world';
y = 5 + 5;
console.log(y);

// Assignment operators

let z;
z = 10;
z += 20; // z = z + 20;

z -= 5; // z = z - 5;

// Comparison Operators
// > , < , >= , <=

let check = 2 != '2';
console.log(check);
