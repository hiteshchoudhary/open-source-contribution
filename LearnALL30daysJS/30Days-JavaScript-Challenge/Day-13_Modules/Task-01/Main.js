import add from "./Add.js";

try {
  console.log(add(6, 7));       // ✅ Should print: 13
  console.log(add("6", 7));     // ❌ Will throw error
} catch (error) {
  console.error("Error:", error.message);
}
