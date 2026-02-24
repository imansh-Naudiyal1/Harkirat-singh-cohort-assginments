/*
  Implement a class `Calculator` having below methods
    - initialize a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0; // Initialize result to 0
  }

  // ➕ Add
  add(num) {
    this.result += num;
  }

  // ➖ Subtract
  subtract(num) {
    this.result -= num;
  }

  // ✖️ Multiply
  multiply(num) {
    this.result *= num;
  }

  // ➗ Divide (handle divide by zero)
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  // 🔁 Clear result
  clear() {
    this.result = 0;
  }

  // 📤 Get current result
  getResult() {
    return this.result;
  }

  // 🧠 Calculate full arithmetic expression
  calculate(expression) {
    // Step 1: Remove all unnecessary spaces
    expression = expression.replace(/\s+/g, "");

    // Step 2: Validate expression (only numbers and arithmetic symbols allowed)
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error("Invalid characters in expression");
    }

    // Step 3: Safely evaluate the expression
    try {
      // Using eval for simplicity (allowed in this assignment)
      const value = eval(expression);

      // Check if result is a valid number
      if (typeof value !== "number" || isNaN(value)) {
        throw new Error("Invalid calculation");
      }

      this.result = value;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
