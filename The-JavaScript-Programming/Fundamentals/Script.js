// Welcome to My JavaScript File!

// I've enhanced and added comments for better readability and understanding.

// The JavaScript code encompasses concepts such as script tags and external file inclusion, functions, logging/printing, data types, if-else statements, loops, string manipulation, math operations, and numeric handling, providing a comprehensive overview of fundamental JavaScript features.

// Declare a function to add two numbers
function addNumbers(a, b) {
  // Return the sum of two numbers
  return a + b;
}

// Example of logging to the console
console.log("Hello, this is an example log!"); // Check browser console for the log

// Example of writing to the document
document.write("This text is written to the document!");

// Example of displaying an alert
alert("Hello! This is an alert!");

// Example of confirming user input
confirm("Really?"); // A confirmation dialog will appear

// Example of prompting user input
prompt("Your age?", "0"); // A prompt dialog will appear

// Example of using if-else statement
var age = 18;
var status;

if (age >= 14 && age < 19) {
  status = "Eligible.";
} else {
  status = "Not eligible.";
}
console.log(status); // Check browser console for the output

// Example of using a for loop
for (var i = 0; i < 10; i++) {
  document.write(i + "<br />");
}
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (each number on a new line)

// Example of using a while loop
var j = 1;
while (j < 100) {
  j *= 2;
  document.write(j + ", ");
}
// Output: 2, 4, 8, 16, 32, 64 (each number separated by a comma)

// Example of using a do-while loop
var k = 1;
do {
  k *= 2;
  document.write(k + ", ");
} while (k < 100);
// Output: 2, 4, 8, 16, 32, 64, 128 (each number separated by a comma)

// Example of working with strings
var abc = "abcdefghijklmnopqrstuvwxyz";
console.log(abc.length); // Output: 26
console.log(abc.indexOf("lmno")); // Output: 11
console.log(abc.lastIndexOf("1mno")); // Output: -1 (not found)
console.log(abc.slice(3, 6)); // Output: def
console.log(abc.replace("abc", "123")); // Output: 123defghijklmnopqrstuvwxyz
console.log(abc.toUpperCase()); // Output: ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(abc.toLowerCase()); // Output: abcdefghijklmnopqrstuvwxyz
console.log(abc.concat("", "str2")); // Output: abcstr2
console.log(abc.charAt(2)); // Output: c
console.log(abc.charCodeAt(2)); // Output: 99
console.log(abc.split(",")); // Output: ["abcdefghijklmnopqrstuvwxyz"]
console.log(abc.split("")); // Output: ["a", "b", ..., "z"]

// Example of using Math functions
var pi = Math.PI;
console.log(Math.round(4.4)); // Output: 4
console.log(Math.round(4.5)); // Output: 5
console.log(Math.pow(2, 8)); // Output: 256
console.log(Math.sqrt(49)); // Output: 7
console.log(Math.abs(-3.14)); // Output: 3.14
console.log(Math.ceil(3.14)); // Output: 4
console.log(Math.floor(3.99)); // Output: 3
console.log(Math.sin(0)); // Output: 0
console.log(Math.cos(Math.PI)); // Output: -1
console.log(Math.floor(Math.random() * 5) + 1); // Output: Random integer from 1 to 5

// Example of working with numbers
var piNumber = 3.141;
console.log(piNumber.toFixed(0)); // Output: 3
console.log(piNumber.toFixed(2)); // Output: 3.14
console.log(piNumber.toPrecision(2)); // Output: 3.1
console.log(piNumber.valueOf()); // Output: 3.141
console.log(Number(true)); // Output: 1
console.log(Number(new Date())); // Output: Number of milliseconds since 1970
console.log(parseInt("3 months")); // Output: 3
console.log(parseFloat("3.5 days")); // Output: 3.5

// Example of using Number constants
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// Feel free to continue enhancing and building upon this code!
