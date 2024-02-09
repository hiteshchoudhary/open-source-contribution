/*

Synchronous : When one process completes its execution then only we can start the other process

Asynchronous : 

Process 1 : 10 min
Process 2 : 2 min
process 3 : 4 min

Javascript is synchronous and single-thread language.

it has asynchronous capabilities.

JavaScript is Single-threaded.

Execution context.
It's big container but it has two parts : 1. memory component 2. thread of execution

let a;
let b; 

const c = 

function sum(a,b) {
    return a+b;
}

// Blocking code (synchronous)

const fs = require('fs');
const filepath = 'text.txt'

// Reads the file in a synchronous and blocking way
const data = fs.readFileSync(filepath , {encoding: 'utf8'});

// Print the content of file
console.log(data);

let sum = 0;
for(let i=1;i<=10;i++) {
    sum = sum + i;
}

console.log('Sum : ',sum);

// output
This is from text file
Sum: 55


// Non - Blocking code (asynchronous)

const fs = require('fs');
const filepath = 'text.txt'

// Reads the file in a asynchronous and non-blocking way
fs.read(filepath , {encoding: 'utf8'} , (err ,data) => {
    console.log(data);
});

// Print the content of file
console.log(data);

let sum = 0;
for(let i=1;i<=10;i++) {
    sum = sum + i;
}

console.log('Sum : ',sum);

output:
Sum : 55
This is from text file



*/

// setTimeout( () => {
//   document.querySelector('h1').textContent = 'Hello from callback'
// }, 3000);

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

setTimeout(changeText, 3000);

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});

console.log('Hello from the top-level code');


// topic to master in javascript
// array methods, string , object, arrow function
// destructring, spread operator, In DOM learn document.queryselector (imp)