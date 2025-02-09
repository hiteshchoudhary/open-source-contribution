const firstName = 'John';
const age = 30;

// console.log(
//   'Hello , My name is ' + firstName + ' and I am ' + age + ' years old'
// );

 console.log(`Hello , My name is  ${firstName} and I am ${age}  years old`);

// String Properties & Methods

const str = new String('Hello world');

console.log(str);
console.log(str[3]);
console.log(str.charAt(3));

console.log(str.__proto__);

const greeting = 'Hello World';
// length
console.log(greeting.length);

// changing case
console.log(greeting.toUpperCase());

console.log(greeting.toLowerCase());

// index of
console.log(greeting.indexOf('o'));

// substring
console.log(greeting.substring(0, 4));

// slice()
console.log(greeting.slice(0, 4));

// trim
let x = '     Hello world       ';
x = x.trim();
console.log(x);

// split
console.log(greeting.split(' '));
