// - Task 2:
// Save object to localStorage
const user = { name: "Alice", email: "alice@example.com" };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse the object
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log("Saved User:", savedUser);

console.log("***Task 2 Ended Here!✅***");
