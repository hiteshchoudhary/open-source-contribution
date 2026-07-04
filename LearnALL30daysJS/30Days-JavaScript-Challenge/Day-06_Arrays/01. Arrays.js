// Activity 1: Array Creation and Access ✅

// - Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1, 2, 3, 4, 5];
console.log("Array of numbers 1 to 5 :", numbers);

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Access the first and last elements of the array and log them to the console.
let numbers2 = [4, 5, 6, 7, 8, 9];
let firstElement = numbers2[0];
let lastElement = numbers2[numbers2.length - 1];
console.log("First number is :", firstElement);
console.log("Last number is :", lastElement);

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Array Methods (Basic) ✅

// - Task 3: Use the `push` method to add a new number to the end of the array and log the updated array.
let arr = [1, 2, 3, 4, 5];
arr.push(7);
console.log(arr);

console.log("***Task 3 Ended Here!✅***");

// - Task 4: Use the `pop` method to remove the last element from the array and log the updated array.
let arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.pop();
console.log(arr2);

console.log("***Task 4 Ended Here!✅***");
// - Task 5: Use the `shift` method to remove the first element from the array and log the updated array.
arr2.shift();
console.log(arr2);

console.log("***Task 5 Ended Here!✅***");
// - Task 6: Use the `unshift` method to add a new number to the beginning of the array and log the updated array.
arr2.unshift(1);
console.log(arr2);

console.log("***Task 6 Ended Here!✅***");
// ********************************* //

// Activity 3: Array Methods (Intermediate) ✅

// - Task 7: Use the `map` method to create a new array where each element is doubled and log the new array.
let arr3 = [1, 2, 3, 4];
let doubledElem = arr3.map((arr3) => arr3 * 2);
console.log(doubledElem);

console.log("***Task 7 Ended Here!✅***");

// - Task 8: Use the `filter` method to create a new array with only even numbers and log the new array.
let evenNumbers = arr3.filter((arr3) => arr3 % 2 === 0);
console.log(evenNumbers);

console.log("***Task 8 Ended Here!✅***");

// - Task 9: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.
let sum = arr3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

console.log("***Task 9 Ended Here!✅***");

// ********************************* //

// Activity 4: Array Iteration ✅

// - Task 10: Use a `for` loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

console.log("***Task 10 Ended Here!✅***");

// - Task 11: Use the `forEach` method to iterate over the array and log each element to the console.
numbers.forEach((arr3) => console.log(arr3));

console.log("***Task 11 Ended Here!✅***");

// ********************************* //

// Activity 5: Multi-dimensional Arrays ✅

// - Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

console.log("***Task 12 Ended Here!✅***");

// - Task 13: Access and log a specific element from the two-dimensional array.
let specificElement = matrix[1][2];
console.log(specificElement); // Output: 5

console.log("***Task 13 Ended Here!✅***");
