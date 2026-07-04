// Activity 1: Understanding Promises ✅
// Task 1
const promiseResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promiseResolve.then((message) => console.log(message));

console.log("***Task 1 Ended Here!✅***");

// Task 2
const promiseReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});

promiseReject.catch((error) => console.error(error.message));

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Chaining Promises ✅
// Task 3
const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched ${data}`);
      resolve(data);
    }, delay);
  });
};

fetchData("Data 1", 1000)
  .then(() => fetchData("Data 2", 1000))
  .then(() => fetchData("Data 3", 1000));

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 3: Using Async/Await ✅
// Task 4
const asyncFunction = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved value");
    }, 2000);
  });

  const result = await promise;
  console.log(result);
};

asyncFunction();

console.log("***Task 4 Ended Here!✅***");

// Task 5
const asyncFunctionWithError = async () => {
  const promise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 2000);
  });

  try {
    await promise;
  } catch (error) {
    console.error(error.message);
  }
};

asyncFunctionWithError();

console.log("***Task 5 Ended Here!✅***");

// ********************************* //

// Activity 4: Fetching Data from an API ✅
// Task 6
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

console.log("***Task 6 Ended Here!✅***");

// Task 7
const fetchDataAsync = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchDataAsync();

console.log("***Task 7 Ended Here!✅***");

// ********************************* //

// Activity 5: Concurrent Promises ✅
// Task 8
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

console.log("***Task 8 Ended Here!✅***");

// Task 9
const promise4 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 4 resolved"), 1000)
);
const promise5 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 5 resolved"), 2000)
);
const promise6 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 6 resolved"), 3000)
);

Promise.race([promise4, promise5, promise6]).then((value) => {
  console.log(value);
});

console.log("***Task 9 Ended Here!✅***");
