// index.js

// Greet the user
console.log("🌟 Welcome to your first Node.js script!");

// Show current time
const now = new Date();
console.log(`🕒 Current time: ${now.toLocaleTimeString()}`);

// Do a simple math operation
const num1 = 7;
const num2 = 3;
console.log(`➕ ${num1} + ${num2} = ${num1 + num2}`);

// Show a random motivational message
const messages = [
  "Keep going, you're doing great!",
  "You’ve got this! 💪",
  "One step at a time. 🚶‍♀️🚶‍♂️",
  "Debugging builds character! 🐛",
  "Push to GitHub like a pro! 🔥"
];

const randomMsg = messages[Math.floor(Math.random() * messages.length)];
console.log(`💬 Message: ${randomMsg}`);