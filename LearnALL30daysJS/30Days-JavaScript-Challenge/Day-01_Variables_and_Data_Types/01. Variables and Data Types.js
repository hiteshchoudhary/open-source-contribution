// Activity 1: Variable Declaration ✅

// - Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var num = 18;
console.log(num);

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let str = "chai";
console.log(str);

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Constant Declaration ✅

// - Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const Boolean = true;
console.log(Boolean);

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 3: Data Types ✅

// - Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.
// number type
let value = 18;
console.log(typeof value);

// string type
let value2 = "String Value";
console.log(typeof value2);

// boolean type
let value3 = false;
console.log(typeof value3);

// object type
let value4 = {
  name: "Chinmay",
  age: 24,
};
console.log(typeof value4);

// array type
let value5 = ["JavaScript", "Chai", "Code", "Challenge"];
console.log(typeof value5);

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 4: Reassigning Variables ✅

// - Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let initialValue = "first";
console.log("Initial Value: ", initialValue);
initialValue = "second";
console.log("Reassigned Value :", initialValue);

console.log("***Task 5 Ended Here!✅***");

// ********************************* //

// Activity 5: Understanding `const` ✅

// - Task 6: Try reassigning a variable declared with `const` and observe the error.
const initialValue2 = "this is a initial value of constant";
initialValue2 = "";
console.log(initialValue2);
// ⚠️ Error Observed - TypeError: Assignment to constant variable.

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Feature Request 🙇‍♂️

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the values of each variable to the console. ✅
// declaration
let num = 18;
let stringVal = "Chinmay";
let valid = true;
let list = ["JavaScript", "Chai", "Code", "Challenge"];
let obj = { name: "Chinmay", age: 24 };
let noVal = null;
let undefined;

// logs
console.log("Number type :", num);
console.log("String type :", stringVal);
console.log("Boolean type :", valid);
console.log("Array type :", list);
console.log("Object type :", obj);
console.log("Null type :", noVal);
console.log("Undefined type :", undefined);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment. ✅
// Reassignment to let variable
let letVariable = "This is initial value for demonstration of let variable";
console.log("Initial Value :", letVariable);

letVariable = "This is Reassigned value for demonstration of let variable";
console.log("Reassigned Value :", letVariable);

// Reassignment to const variable
let constVariable = "This is initial value for demonstration of const variable";
console.log("Initial Value :", constVariable);

try {
  constVariable =
    "This is Reassigned value for demonstration of const variable";
  console.log("Reassigned Value :", constVariable);
} catch (error) {
  console.log(error);
}
