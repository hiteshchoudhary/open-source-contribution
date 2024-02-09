// Arrays are a special type of object in JS.
// Array Literal

// console.log(arr);

const arr4 = new Array(10, 20, 30, 40, 50);

 console.log(arr4);

 const fruits = ['apples', 'oranges', 'mango'];

console.log(fruits.length);

// const mixed = [1, 'string', true, null, undefined, [1, 2, 3]];

// console.log(mixed);

// fruits[fruits.length] = 'banana';

 console.log(fruits);

// Arrays Method
const arr = [1, 2, 3, 4, 5];

// push method
arr.push(6);
// console.log(arr);

// pop method
arr.pop();
// console.log(arr);

// unshift method
arr.unshift(25);
// console.log(arr);

// shift method
arr.shift();
// console.log(arr);

// reverse method
arr.reverse();
// console.log(arr);

// includes()- it return true or false by checking the element is present in array or not
// console.log(arr.includes(5));

// indexOf()
// console.log(arr.indexOf(5));

// console.log(arr.toString());

const newArr = arr.slice(1, 4);
 console.log(newArr);

const fruits1 = ['apple', 'pear', 'orange'];

const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits1.push(berries);
 console.log(fruits1);

console.log(fruits1[3][1]);

// We could also create a new variable and nest both arrays
const allFruits = [fruits, berries];

 console.log(allFruits);
console.log(allFruits[1][2]);

// concat

const newArr1 = fruits.concat(berries);

 console.log(newArr1);

// spread operator
const newArr3 = [...fruits, ...berries];
 console.log(newArr3);

const arr2 = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, [11, 12]]]];

 console.log(arr2.flat());
let y;
const a = 1;
const b = 2;
const c = 3;
y = Array.of(a, b, c);
console.log(y);

