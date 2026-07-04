// - Task 6:
// Save object to sessionStorage
const sessionUser = { name: "Bob", email: "bob@example.com" };
sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));

// Retrieve and parse the object
const sessionSavedUser = JSON.parse(sessionStorage.getItem("sessionUser"));
console.log("Session User:", sessionSavedUser);

console.log("***Task 6 Ended Here!✅***");