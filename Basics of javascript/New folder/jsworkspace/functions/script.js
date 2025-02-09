function sayHello() {
  console.log('Hello World');
}

/*
    Functions are a way to group code together
*/

sayHello();

/*
    Parameters are the names of the variables that are used to pass data into a  function
*/

/*
    Arguments are the values that are passed into the function
*/

// function add(x, y) {
//   console.log(x + y);
// }

// add(10, 10);

function subtract(x, y) {
  return x - y;

  console.log('After the return');
}

const sub = subtract(10, 5);
console.log(sub);

// Global & Function Scope

// console.log(window);
// window.alert('Hello world');

// alert('Hello world');

const x = 100;   //global scope varible
// console.log(x);

function run() {
  console.log(x);
}

run();

/*
    If I create a variable called x in the function , it will overwrite the global variable and I can no longer access it. This is called variable shadowing.
*/
function multiply() {
  const x = 30;   //function scope varible
  const y = 50;
  console.log(x * y);
}
multiply();

// Let & const vs Var

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;  //var is like  global scope varible
}

// console.log(a);
// console.log(b);
console.log(c);
// console.log(window);

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i);

function runAgain() {
  var d = 900;
  console.log(d);
}
runAgain();
// if you  create varible var in function  it will not acessible out side the function
//console.log(d); ( throws the error)

function first() {
  const x = 500;

  function second() {
    const y = 600;
    console.log(x);
  }
   // console.log(y);

  second();
}

// Function Declaration vs Function Expression

// const money = addDollarSign('60');

// console.log(money);

// const addPlus = addPlusSign('70');
// console.log(addPlus);

function addDollarSign(value) {
  return '$' + value;
}
console.log(addDollarSign('10'));

const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign('10'));

// function add(a,b) {
//     return a + b;
// }

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(1, 2));

//shorthand proprety use
const add = (a, b) => a + b;
console.log(add(4, 5));

const add1 = (a) => a + 10;
console.log(add1(5));

/*
    main() {

       int result = factorial(5);
       print(result);
    }

    int factorial(int n) {
        
        if(n < 1)
            return 1;

        return n*factorial(n-1);
    }
*/
// using the function  over the arrays
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
// using arrrow function method
numbers.forEach((number) => console.log(number));

/*
challenge 1:
create a function getCelsius() that takes fahrenheit as an argument and returns the temperature in celsius.

console.log(getCelsius(32));

formula : (F-32)*5 / 9;

*/
/*
using noraml function
function getCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
   got the value in deciamal so use round function to round it
  return Math.round(celsius);
}
*/
// using arrow function method
const getCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;

  return Math.round(celsius);
};

console.log(getCelsius(97));
