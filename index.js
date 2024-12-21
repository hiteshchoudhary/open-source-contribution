class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

const calculator = new Calculator();

console.log("Addition: " + calculator.add(5, 3)); // 8
console.log("Subtraction: " + calculator.subtract(5, 3)); // 2
console.log("Multiplication: " + calculator.multiply(5, 3)); // 15
console.log("Division: " + calculator.divide(5, 3)); // 1.666...