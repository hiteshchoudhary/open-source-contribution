# JavaScript Cheat Sheet for Beginners to Intermediate Developers

## 1. Variables

| Type | Scope | Reassignable | Redeclarable | Initialization |
|------|-------|--------------|--------------|-----------------|
| `var` | Function/Global | ✅ Yes | ✅ Yes | Optional (undefined if not) |
| `let` | Block | ✅ Yes | ❌ No | Optional (undefined if not) |
| `const` | Block | ❌ No | ❌ No | Required |

```javascript
var name = "John";        // Function-scoped, avoid using
let age = 25;             // Block-scoped, preferred
const city = "New York";  // Block-scoped constant, preferred
```

---

## 2. Data Types

### Primitive Types (7)
- **String**: `"Hello"`, `'World'`, `` `Template` ``
- **Number**: `42`, `3.14`, `Infinity`, `NaN`
- **Boolean**: `true`, `false`
- **Null**: `null` (intentional absence)
- **Undefined**: `undefined` (uninitialized)
- **Symbol**: `Symbol('unique')`
- **BigInt**: `123n` (large integers)

### Reference Types
- **Object**: `{ key: value }`
- **Array**: `[1, 2, 3]`
- **Function**: `function() {}`

```javascript
typeof "hello"        // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof {}             // "object"
typeof []             // "object" (arrays are objects)
typeof function(){}   // "function"
```

---

## 3. Operators

### Arithmetic
```javascript
5 + 3   // Addition → 8
5 - 3   // Subtraction → 2
5 * 3   // Multiplication → 15
5 / 3   // Division → 1.666...
5 % 3   // Modulo (remainder) → 2
2 ** 3  // Exponentiation → 8
```

### Comparison
```javascript
5 == "5"   // Loose equality → true (type coercion)
5 === "5"  // Strict equality → false (no coercion)
5 != 3     // Loose inequality → true
5 !== "5"  // Strict inequality → true
5 > 3      // Greater than → true
5 < 3      // Less than → false
5 >= 5     // Greater or equal → true
5 <= 3     // Less or equal → false
```

### Logical
```javascript
true && false   // AND → false
true || false   // OR → true
!true           // NOT → false

// Short-circuit evaluation
false && console.log("Never runs")
true || console.log("Never runs")
```

### Assignment
```javascript
let x = 10;
x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
```

---

## 4. Conditionals

### if/else
```javascript
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}
```

### switch
```javascript
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}
```

### Ternary Operator
```javascript
const status = age >= 18 ? "Adult" : "Minor";
```

---

## 5. Loops

### for Loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

### while Loop
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### do-while Loop
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);  // Runs at least once
```

### for...of Loop (values)
```javascript
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);  // "apple", "banana", "cherry"
}
```

### for...in Loop (keys/indices)
```javascript
const person = { name: "John", age: 30 };
for (const key in person) {
    console.log(key);  // "name", "age"
}
```

### break & continue
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // Skip this iteration
    if (i === 7) break;     // Exit loop
    console.log(i);
}
```

---

## 6. Functions

### Function Declaration
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
greet("John");  // "Hello, John!"
```

### Function Expression
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
greet("John");
```

### Arrow Functions
```javascript
const add = (a, b) => a + b;
const square = x => x * x;
const greet = (name) => {
    return `Hello, ${name}!`;
};
```

### Default Parameters
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
greet();        // "Hello, Guest!"
greet("John");  // "Hello, John!"
```

### Rest Parameters
```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3);  // 6
```

---

## 7. Arrays

### Creating Arrays
```javascript
const arr = [1, 2, 3];
const arr = new Array(1, 2, 3);
const arr = Array.from("hello");  // ['h', 'e', 'l', 'l', 'o']
```

### Accessing Elements
```javascript
const arr = [10, 20, 30];
arr[0];         // 10
arr.length;     // 3
arr.at(-1);     // 30 (last element)
```

### Mutating Methods
```javascript
const arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4] → returns 4
arr.pop();          // [1, 2, 3] → returns 4
arr.unshift(0);     // [0, 1, 2, 3]
arr.shift();        // [1, 2, 3] → returns 0
arr.splice(1, 1);   // Remove 1 element at index 1
```

### Non-Mutating Methods
```javascript
const arr = [1, 2, 3, 4, 5];

// map: Transform each element
arr.map(x => x * 2);  // [2, 4, 6, 8, 10]

// filter: Keep elements that pass test
arr.filter(x => x > 2);  // [3, 4, 5]

// reduce: Accumulate to single value
arr.reduce((sum, x) => sum + x, 0);  // 15

// find: Return first matching element
arr.find(x => x > 2);  // 3

// findIndex: Return first matching index
arr.findIndex(x => x > 2);  // 2

// some: Check if any element passes test
arr.some(x => x > 4);  // true

// every: Check if all elements pass test
arr.every(x => x > 0);  // true

// includes: Check if array contains value
arr.includes(3);  // true

// join: Convert array to string
arr.join("-");  // "1-2-3-4-5"

// slice: Extract portion (doesn't mutate)
arr.slice(1, 3);  // [2, 3]

// reverse: Reverse array (mutates)
arr.reverse();  // [5, 4, 3, 2, 1]

// sort: Sort array (mutates)
arr.sort((a, b) => a - b);  // [1, 2, 3, 4, 5]
```

---

## 8. Objects

### Creating Objects
```javascript
// Object literal
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Constructor
const person = new Object();
person.name = "John";

// Factory function
function createPerson(name, age) {
    return { name, age };
}
```

### Accessing Properties
```javascript
const person = { name: "John", age: 30 };

person.name;           // "John" (dot notation)
person["name"];        // "John" (bracket notation)
person["full-name"];   // For keys with hyphens
```

### Adding/Modifying Properties
```javascript
const person = {};
person.name = "John";        // Add property
person["age"] = 30;
person.name = "Jane";        // Modify property
delete person.age;           // Delete property
```

### Destructuring
```javascript
const person = { name: "John", age: 30, city: "NY" };
const { name, age } = person;
const { name: fullName } = person;  // Rename
const { name, ...rest } = person;   // Rest operator
```

### Optional Chaining
```javascript
const person = { name: "John", address: { city: "NY" } };
person.address?.city;       // "NY"
person.phone?.number;       // undefined (safe)
person.getName?.();         // Call if exists

// Array optional chaining
const arr = [1, 2, 3];
arr?.[0];                   // 1
```

### Nullish Coalescing
```javascript
const value = null ?? "default";  // "default"
const value = 0 ?? "default";     // 0
const value = undefined ?? "default";  // "default"
```

### Object Methods
```javascript
const person = { name: "John", age: 30 };

Object.keys(person);        // ["name", "age"]
Object.values(person);      // ["John", 30]
Object.entries(person);     // [["name", "John"], ["age", 30]]
Object.assign({}, person);  // Copy object
Object.freeze(person);      // Make immutable
Object.seal(person);        // Prevent adding/deleting props
```

---

## 9. ES6+ Features

### Template Literals
```javascript
const name = "John";
const age = 30;
const message = `${name} is ${age} years old`;
```

### Spread Operator
```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }

// Function arguments
const numbers = [1, 2, 3];
Math.max(...numbers);  // 3
```

### Rest Parameters
```javascript
const sum = (...nums) => nums.reduce((a, b) => a + b);
sum(1, 2, 3, 4);  // 10
```

### Default Parameters
```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
```

### Destructuring Assignment
```javascript
// Arrays
const [first, second] = [1, 2, 3];  // first = 1, second = 2
const [first, , third] = [1, 2, 3]; // Skip middle

// Objects
const { name, age } = { name: "John", age: 30 };
const { name: firstName } = { name: "John" };  // Rename
```

### Modules (ES6)
```javascript
// export.js
export const myFunction = () => {};
export default MyClass;

// import.js
import MyClass, { myFunction } from './export.js';
```

---

## 10. DOM Manipulation

### Selecting Elements
```javascript
// Single element
document.getElementById("myId");
document.querySelector(".myClass");
document.querySelector("div > p");

// Multiple elements
document.getElementsByClassName("myClass");
document.querySelectorAll(".item");
```

### Modifying Content
```javascript
const element = document.querySelector("#myDiv");
element.textContent = "New text";      // Text only
element.innerHTML = "<p>New HTML</p>"; // HTML
element.innerText = "New text";        // Text (with styling)
```

### Modifying Attributes
```javascript
element.getAttribute("data-value");
element.setAttribute("data-value", "new");
element.removeAttribute("data-value");
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

### Modifying Styles
```javascript
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.display = "none";
```

### Creating & Removing Elements
```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);

element.remove();
element.parentElement.removeChild(element);
```

---

## 11. Event Handling

### Adding Event Listeners
```javascript
element.addEventListener("click", function(event) {
    console.log("Clicked!");
});

// Arrow function
element.addEventListener("click", (event) => {
    console.log("Clicked!");
});
```

### Common Events
```javascript
element.addEventListener("click", handler);      // Click
element.addEventListener("dblclick", handler);   // Double click
element.addEventListener("mouseover", handler);  // Mouse over
element.addEventListener("mouseout", handler);   // Mouse out
element.addEventListener("keydown", handler);    // Key down
element.addEventListener("keyup", handler);      // Key up
element.addEventListener("change", handler);     // Input changed
element.addEventListener("submit", handler);     // Form submitted
element.addEventListener("focus", handler);      // Element focused
element.addEventListener("blur", handler);       // Element blurred
```

### Event Object
```javascript
element.addEventListener("click", (event) => {
    event.type;           // "click"
    event.target;         // Element clicked
    event.currentTarget;  // Element with listener
    event.preventDefault();       // Cancel default action
    event.stopPropagation();      // Stop bubbling
    event.stopImmediatePropagation();  // Stop all handlers
});
```

### Event Delegation
```javascript
const list = document.querySelector("#myList");
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Item clicked:", event.target.textContent);
    }
});
```

---

## 12. Promises

### Creating Promises
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});
```

### Using Promises
```javascript
myPromise
    .then(result => {
        console.log(result);  // "Success!"
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done!");
    });
```

### Promise States
- **Pending**: Initial state
- **Fulfilled**: Resolved successfully
- **Rejected**: Rejected with error

### Promise Methods
```javascript
// Wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then(results => {})
    .catch(error => {});

// Wait for first promise to settle
Promise.race([promise1, promise2])
    .then(result => {})
    .catch(error => {});

// Resolve immediately
Promise.resolve(value);

// Reject immediately
Promise.reject(error);
```

---

## 13. Async/Await

### Async Functions
```javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
}
```

### Arrow Async Functions
```javascript
const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    return await response.json();
};

fetchData().then(data => console.log(data));
```

### Handling Multiple Awaits
```javascript
async function getData() {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    return { user, posts };
}

// Parallel execution
async function getData() {
    const [user, posts] = await Promise.all([
        fetchUser(1),
        fetchPosts(1)
    ]);
}
```

---

## 14. Error Handling

### try-catch-finally
```javascript
try {
    // Code that might throw error
    riskyFunction();
} catch (error) {
    // Handle error
    console.log("Error:", error.message);
} finally {
    // Runs regardless of error
    cleanup();
}
```

### Throwing Errors
```javascript
if (!name) {
    throw new Error("Name is required!");
}

if (!Array.isArray(value)) {
    throw new TypeError("Value must be an array!");
}
```

### Error Types
```javascript
new Error("Generic error");
new TypeError("Wrong type");
new ReferenceError("Undefined variable");
new SyntaxError("Invalid syntax");
new RangeError("Out of range");
```

---

## 15. Common Built-in Methods

### Math Object
```javascript
Math.abs(-5);               // 5
Math.round(4.6);            // 5
Math.floor(4.9);            // 4
Math.ceil(4.1);             // 5
Math.max(1, 5, 3);          // 5
Math.min(1, 5, 3);          // 1
Math.random();              // 0.123... (0-1)
Math.pow(2, 3);             // 8
Math.sqrt(16);              // 4
Math.PI;                    // 3.14159...
```

### String Methods
```javascript
const str = "Hello World";
str.length;                 // 11
str.toUpperCase();          // "HELLO WORLD"
str.toLowerCase();          // "hello world"
str.trim();                 // Remove whitespace
str.includes("World");      // true
str.startsWith("Hello");    // true
str.endsWith("World");      // true
str.indexOf("o");           // 4
str.lastIndexOf("o");       // 7
str.substring(0, 5);        // "Hello"
str.slice(0, 5);            // "Hello"
str.replace("World", "JS"); // "Hello JS"
str.split(" ");             // ["Hello", "World"]
str.repeat(2);              // "Hello WorldHello World"
str.charAt(0);              // "H"
str.charCodeAt(0);          // 72
str.concat(" JS");          // "Hello World JS"
str.padStart(15, "*");      // "****Hello World"
str.padEnd(15, "*");        // "Hello World****"
```

### Date Object
```javascript
const date = new Date();
new Date("2025-02-08");
new Date(2025, 1, 8);       // Month is 0-indexed

date.getFullYear();         // 2025
date.getMonth();            // 1 (0-11)
date.getDate();             // 8
date.getDay();              // Day of week (0-6)
date.getHours();            // 0-23
date.getMinutes();          // 0-59
date.getSeconds();          // 0-59
date.getTime();             // Milliseconds since 1970

date.setFullYear(2026);
date.toDateString();        // "Sun Feb 08 2026"
date.toISOString();         // "2025-02-08T00:00:00.000Z"
date.toLocaleDateString();  // "2/8/2025"
```

### Number Methods
```javascript
const num = 3.14159;
num.toFixed(2);             // "3.14" (string)
num.toPrecision(2);         // "3.1"
num.toString();             // "3.14159"
Number.isInteger(3);        // true
Number.isNaN(NaN);          // true
Number.isSafeInteger(1000); // true
parseInt("42");             // 42
parseFloat("3.14");         // 3.14
```

---

## 16. JavaScript Best Practices

### 1. Use `const` by Default
```javascript
// ✅ Good
const name = "John";
const age = 30;

// ❌ Avoid
var name = "John";
let age = 30;
```

### 2. Use Strict Equality
```javascript
// ✅ Good
if (value === 5) { }
if (value !== null) { }

// ❌ Avoid
if (value == 5) { }
if (value != null) { }
```

### 3. Meaningful Variable Names
```javascript
// ✅ Good
const userData = getUserData();
const isUserLoggedIn = checkAuthentication();

// ❌ Avoid
const data = getUserData();
const x = checkAuthentication();
```

### 4. Single Responsibility Principle
```javascript
// ✅ Good
const getUser = (id) => fetchUser(id);
const formatUser = (user) => ({ ...user, fullName: `${user.firstName} ${user.lastName}` });

// ❌ Avoid
const getUserAndFormat = (id) => {
    const user = fetchUser(id);
    return { ...user, fullName: `${user.firstName} ${user.lastName}` };
};
```

### 5. DRY (Don't Repeat Yourself)
```javascript
// ✅ Good
const calculateTax = (amount, taxRate) => amount * taxRate;
const totalWithTax = (price) => price + calculateTax(price, 0.1);

// ❌ Avoid
const totalWithTax1 = (price) => price + price * 0.1;
const totalWithTax2 = (price) => price + price * 0.1;
```

### 6. Comments for WHY, Not WHAT
```javascript
// ✅ Good
// Using reduce to sum all user purchases for loyalty calculation
const totalSpent = users.reduce((sum, user) => sum + user.purchases, 0);

// ❌ Avoid
// Loop through users and add purchases to sum
const totalSpent = users.reduce((sum, user) => sum + user.purchases, 0);
```

### 7. Avoid Global Variables
```javascript
// ✅ Good
const userModule = (() => {
    const users = [];
    return {
        addUser: (user) => users.push(user),
        getUsers: () => [...users]
    };
})();

// ❌ Avoid
let users = [];
function addUser(user) { users.push(user); }
```

### 8. Use Arrow Functions for Short Logic
```javascript
// ✅ Good
const double = (x) => x * 2;
[1, 2, 3].map(x => x * 2);

// For complex logic, use function declaration
function complexCalculation(data) {
    // Multiple lines
    return result;
}
```

### 9. Error Handling
```javascript
// ✅ Good
try {
    const data = JSON.parse(jsonString);
} catch (error) {
    console.error("Invalid JSON:", error);
    // Handle gracefully
}

// ❌ Avoid
const data = JSON.parse(jsonString);  // Will crash if invalid
```

### 10. Avoid Callback Hell
```javascript
// ✅ Good - Using Promises/Async-Await
const fetchUserPosts = async (userId) => {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    return { user, posts };
};

// ❌ Avoid - Callback Hell
fetchUser(1, (user) => {
    fetchPosts(user.id, (posts) => {
        fetchComments(posts[0].id, (comments) => {
            console.log(comments);
        });
    });
});
```

### 11. Use Template Literals
```javascript
// ✅ Good
const message = `${name} is ${age} years old`;

// ❌ Avoid
const message = name + " is " + age + " years old";
```

### 12. Destructuring for Cleaner Code
```javascript
// ✅ Good
const { name, age, email } = user;
const [first, second] = array;

// ❌ Avoid
const name = user.name;
const age = user.age;
const email = user.email;
```

### 13. Use Logical Operators Wisely
```javascript
// ✅ Good
const status = isActive ? "active" : "inactive";
const greeting = name || "Guest";
const value = user?.profile?.name;

// ❌ Avoid
let status;
if (isActive) {
    status = "active";
} else {
    status = "inactive";
}
```

### 14. Object/Array Immutability
```javascript
// ✅ Good
const newUser = { ...user, name: "Jane" };
const newArray = [...array, newItem];

// ❌ Avoid
user.name = "Jane";  // Mutating original
array.push(newItem); // Mutating original
```

### 15. Performance Tips
```javascript
// ✅ Cache DOM selectors
const element = document.querySelector("#myDiv");
element.classList.add("active");

// ✅ Debounce event handlers
const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
};

// ✅ Avoid unnecessary re-renders
const memoizedValue = useMemo(() => expensiveCalculation(), [dependencies]);

// ✅ Use event delegation
parent.addEventListener("click", (e) => {
    if (e.target.matches(".item")) { }
});
```

### 16. Code Organization
```javascript
// ✅ Good structure
const userService = {
    getUser: (id) => { },
    updateUser: (id, data) => { },
    deleteUser: (id) => { }
};

// ✅ Use modules
export const getUser = (id) => { };
export const updateUser = (id, data) => { };

// ✅ Separate concerns
// utils.js - utility functions
// api.js - API calls
// components.js - UI components
```

---

## Quick Reference Cheat Sheet

| Feature | Syntax | Example |
|---------|--------|---------|
| Variable | const/let | `const x = 5;` |
| Function | const name = () => {} | `const add = (a,b) => a+b;` |
| Arrow Function | () => {} | `x => x * 2` |
| Template Literal | `` `text ${var}` `` | `` `Hello ${name}` `` |
| Destructure Object | `{ a, b }` | `const { name } = user;` |
| Destructure Array | `[a, b]` | `const [first] = array;` |
| Spread Operator | `...array` | `[...arr, 4]` |
| Rest Parameters | `(...args)` | `(...nums) => {}` |
| Promise | `new Promise()` | `new Promise((resolve, reject) => {})` |
| Async/Await | `async () => { await }` | `async () => { const x = await fetch(); }` |
| Try-Catch | `try {} catch {}` | `try { riskyCode(); } catch (e) {}` |
| Map | `.map(callback)` | `[1,2].map(x => x*2)` |
| Filter | `.filter(test)` | `arr.filter(x => x > 5)` |
| Reduce | `.reduce(callback, init)` | `arr.reduce((sum, x) => sum+x, 0)` |

---

**Last Updated**: February 8, 2026  
**Level**: Beginners to Intermediate Developers  
**Perfect for**: Quick revision before interviews 🚀