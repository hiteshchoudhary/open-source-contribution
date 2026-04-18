// "Guess the output" 5 questions for the contributors to answer in the pull request description:

// 1. What will be the output of the following code snippet?

const arr = [1, 2, 3];
const result = arr.splice(1, 2)
arr[1] = 99;
console.log(result, arr);

// 2. What will be the output of the following code snippet?

const values = [3, 20, 100];
values.sort((a, b) => a - b);
values.push("5");
values[1] += 1;
console.log(values);

// 3. What will be the output of the following code snippet?

let arr = [0, 1, 2, 3, 4, 5];

arr.shift(0);
arr.push(0);
console.log(arr);

// 4. What will be the output of the following code snippet?

const arr = [1, 2, 3];
 arr.length = 0;
 console.log(arr)

// 5. What will be the output of the following code snippet?

const date = new Date(0);
console.log(date + 1);
console.log(date - 1);