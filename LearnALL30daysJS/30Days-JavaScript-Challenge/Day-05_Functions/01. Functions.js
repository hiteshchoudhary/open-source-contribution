// Activity 1: Function Declaration ✅

// - Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is a Even Number`);
  } else {
    console.log(`${num} is a Odd Number`);
  }
}
isEvenOrOdd(4);
isEvenOrOdd(7);

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Write a function to calculate the square of a number and return the result.
function squareCalculator(a) {
  return a ** 2;
}
console.log(squareCalculator(5));
console.log(squareCalculator(7));

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Function Expression ✅

// - Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxNum = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is Greater.");
  } else {
    console.log(num2 + " is Greater.");
  }
};
maxNum(7, 24);
maxNum(28, 25);

console.log("***Task 3 Ended Here!✅***");

// - Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStr = function (str1, str2) {
  return str1 + str2;
};
console.log(concatenateStr("Hello, ", "ChaiAurCode !"));
console.log(concatenateStr("Chai ", "Aur JavaScript!"));

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Arrow Functions ✅

// - Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 3));
console.log(sum(10, 20));

console.log("***Task 5 Ended Here!✅***");

// - Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const charCheck = (str, char) => str.includes(char);
console.log(charCheck("Chai Aur Code", "a"));
console.log(charCheck("JavaScript", "1"));

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 4: Function Parameters and Default Values ✅

// - Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiplication(a, b = 1) {
  return a * b;
}
console.log(multiplication(5, 2));
console.log(multiplication(7));

console.log("***Task 7 Ended Here!✅***");

// - Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = "undefined") {
  return `Good Morning ! Hello, ${name} having age of ${age} years old.`;
}
console.log(greet("John", 30));
console.log(greet("Chinmay"));

console.log("***Task 8 Ended Here!✅***");

// ********************************* //

// Activity 5: Higher-Order Functions ✅

// - Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFnc(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}
function greet() {
  console.log("Hello! ChaiAurCode");
}
repeatFnc(greet, 3);

console.log("***Task 9 Ended Here!✅***");

// - Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function compose(fn1, fn2) {
  return function (val) {
    return fn2(fn1(val));
  };
}
function double(num) {
  return num * 2;
}
function square(num) {
  return num ** 2;
}
const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(2));
console.log(doubleThenSquare(3));

console.log("***Task 10 Ended Here!✅***");
