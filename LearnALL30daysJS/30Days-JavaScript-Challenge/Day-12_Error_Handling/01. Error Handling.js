// Activity 1: Basic Error Handling with Try-Catch ✅
// Task 1
function throwError() {
  throw new Error("This is an intentional error.");
}

try {
  throwError();
} catch (error) {
  console.error("Error: ", error.message);
}

console.log("***Task 1 Ended Here!✅***");

// Task 2
function divide(a, b) {
  if (b === 0) {
    throw new Error("Can't divide by zero.");
  }
  return a / b;
}

try {
  console.log(divide(7, 0));
} catch (error) {
  console.error("Error: ", error.message);
}

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Finally Block ✅
// Task 3
try {
  console.log("Inside try block.");
  throw new Error("Something went wrong.");
} catch (error) {
  console.error("Error: ", error.message);
} finally {
  console.log("This will always execute. Default Condition");
}

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 3: Custom Error Objects ✅
// Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error.");
}

try {
  throwCustomError();
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

console.log("***Task 4 Ended Here!✅***");

// Task 5
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError("Input cannot be empty.");
  }
  return "Valid input";
}

try {
  console.log(validateInput(""));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

console.log("***Task 5 Ended Here!✅***");

// ********************************* //

// Activity 4: Error Handling in Promises ✅
// Task 6
const randomPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

randomPromise
  .then((message) => console.log(message))
  .catch((error) => console.error("Promise rejected: ", error));

console.log("***Task 6 Ended Here!✅***");

// Task 7
async function handleRandomPromise() {
  try {
    const message = await randomPromise;
    console.log(message);
  } catch (error) {
    console.error("Error : ", error);
  }
}

handleRandomPromise();

console.log("***Task 7 Ended Here!✅***");

// ********************************* //

// Activity 5: Graceful Error Handling in Fetch ✅
// Task 8
fetch("https://invalidurl.com")
  .then((response) => response.json())
  .catch((error) => console.error("Fetch error: ", error));

console.log("***Task 8 Ended Here!✅***");

// Task 9
async function fetchData() {
  try {
    const response = await fetch("https://invalidurl.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchData();

console.log("***Task 9 Ended Here!✅***");
