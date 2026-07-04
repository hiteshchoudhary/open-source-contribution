// Activity 1: If-Else Statements ✅

// - Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 7;

if (num > 0) {
  console.log(num, "is a Positive Number.");
} else if (num < 0) {
  console.log(num, "is a Negative Number.");
} else {
  console.log(num, "is Zero.");
}

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Write a Program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 23;

if (age >= 18) {
  console.log("Congratulations, You're Eligible to Vote!");
} else {
  console.log("Sorry, You're not Eligible to Vote!");
}

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Nested If-Else Statements ✅

// - Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let firstNum = 5;
let secondNum = 10;
let thirdNum = 20;

if (firstNum > secondNum) {
  console.log(firstNum, ": First Number is greater");
} else if (secondNum > thirdNum) {
  console.log(secondNum, ": Second Number is greater");
} else {
  console.log(thirdNum, ": Third Number is greater");
}

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 3: Switch Case ✅

// - Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 7;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid Day Number, Please Enter Day Number Between 1 to 7";
    break;
}
console.log(dayName);

console.log("***Task 4 Ended Here!✅***");

// - **Task 5:** Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'f') based on a score and log the grade to the console.
let score = 80;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade =
      "Invalid Score!. Score should not be greater than 100 and less than 0";
    break;
}
console.log(grade);

console.log("***Task 5 Ended Here!✅***");

// ********************************* //

// Activity 4: Conditional (Ternary) Operator ✅

// - Task 06: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let numberCheck = 5;

let result = numberCheck % 2 === 0 ? "Even" : "Odd";
console.log(result);

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 5: Combining Conditions ✅

// - Task 07: Write a program to check if a year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
yearCheck = 2000;
let isLeapYear =
  yearCheck % 4 === 0 && (yearCheck % 100 !== 0 || yearCheck % 400 === 0)
    ? "Leap year"
    : "Not a leap year";
console.log(`${yearCheck} is ${isLeapYear}`);

console.log("***Task 7 Ended Here!✅***");