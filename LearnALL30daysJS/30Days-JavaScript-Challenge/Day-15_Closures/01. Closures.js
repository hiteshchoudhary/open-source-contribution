// Activity 1: Understanding Closures ✅
// - Task 1:
function outerFunction() {
  let outerVariable = "Outer Function is Here";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction();
inner();

console.log("***Task 1 Ended Here!✅***");

// - Task 2:
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Practical Closures ✅
// - Task 3:
function idGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

const generateId = idGenerator();
console.log(generateId());
console.log(generateId());

console.log("***Task 3 Ended Here!✅***");

// - Task 4:
function greetUser(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetChinmay = greetUser("Chinmay");
greetChinmay();

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Closures in Loops ✅
// Task 5:
function createFunctions() {
  let functions = [];

  for (let i = 0; i < 7; i++) {
    functions.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
}

const functionsArray = createFunctions();
functionsArray[0]();
functionsArray[1]();
functionsArray[2]();
functionsArray[3]();
functionsArray[4]();
functionsArray[5]();
functionsArray[6]();

console.log("***Task 5 Ended Here!✅***");

// ********************************* //

// Activity 4: Module Pattern ✅
// Task 6:
const itemManager = (function () {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return items;
    },
  };
})();

itemManager.addItem("Pen");
itemManager.addItem("Pencil");
console.log(itemManager.listItems());

itemManager.removeItem("Pen");
console.log(itemManager.listItems());

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 5: Memoization ✅
// - Task 7:
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));

console.log("***Task 7 Ended Here!✅***");

// Task 8:
function memoizeFactorial() {
  const cache = {};

  return function factorial(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n === 0) {
        cache[n] = 1;
      } else {
        cache[n] = n * factorial(n - 1);
      }
      return cache[n];
    }
  };
}

const factorial = memoizeFactorial();
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(2));

console.log("***Task 8 Ended Here!✅***");
