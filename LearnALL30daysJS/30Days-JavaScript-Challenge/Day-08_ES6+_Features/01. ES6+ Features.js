// Activity 1: Template Literals ✅

// - Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Virat";
const age = 32;
console.log(`My name is ${name} and I'm ${age} years old.`);

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Create a multi-line string using the template literals and log it to the console.
const multiLineString = `This is a multi-line string.
This is a second string.
This is a third string.`;
console.log(multiLineString);

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Destructuring ✅

// - Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [firstElem, secondElem] = numbers;
console.log(firstElem, secondElem); 

console.log("***Task 3 Ended Here!✅***");

// - Task 4: Use Object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Wings of Fire",
    author: "ABJ Abdul Kalam",
    year: 1999
  };
const { title, author } = book;
console.log(title, author); 

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Spread and Rest Operators ✅

// - Task 5:Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); 

console.log("***Task 5 Ended Here!✅***");

// - Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
console.log(sum(1, 2, 3, 4));

console.log("***Task 6 Ended Here!✅***");


// ********************************* //

// Activity 4: Default Parameters ✅

// - Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
  }
console.log(multiply(7)); 
console.log(multiply(7, 2)); 

console.log("***Task 7 Ended Here!✅***");

// ********************************* //

// Activity 5: Enhanced Object Literals ✅

// - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const anotherName = "Chinmay";
const anotherAge = 24;

const person = {
  anotherName,
  anotherAge,
  greet() {
    console.log(`Hello, My name is ${this.anotherName} and I'm ${this.anotherAge} years old.`);
  }
};

console.log(person);
person.greet();

console.log("***Task 8 Ended Here!✅***");

// - Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "Name";
const obj = {
  [propName]: "Hello, My Name is John", 
};

console.log(obj); 

console.log("***Task 9 Ended Here!✅***");
