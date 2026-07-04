// Activity 1: For Loop ✅

// - Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: While Loop ✅

// - Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sumNum = 0;
let i = 1;
while (i <= 10) {
  sumNum += i;
  i++;
}
console.log(`Sum of numbers from 1 to 10 is: ${sumNum}`);

console.log("***Task 3 Ended Here!✅***");

// - Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let num = 10;
while (num >= 1) {
  console.log(`${num}`);
  num--;
}

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Do... While Loop ✅

// - Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

console.log("***Task 5 Ended Here!✅***");

// - Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let num2 = 7;
let fact = 1;

let factNum = num2;
do {
  fact *= factNum;
  factNum--;
} while (factNum > 0);
console.log(`Factorial of ${num2} is: ${fact}`);

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 4: Nested Loops ✅

// - Task 7: Write a program to print a pattern using nested for loops:
for (let i = 1; i <= 5; i++) {
  let starPattern = "";
  for (let j = 1; j <= i; j++) {
    starPattern += "*";
  }
  console.log(starPattern);
}

console.log("***Task 7 Ended Here!✅***");

// ********************************* //

// Activity 5: Loop Control Statements ✅

// - Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("***Task 8 Ended Here!✅***");

// - Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

console.log("***Task 9 Ended Here!✅***");
