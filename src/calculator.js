#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + (addition)       - adds two numbers
 *   - (subtraction)    - subtracts the second number from the first
 *   * (multiplication) - multiplies two numbers
 *   / (division)       - divides the first number by the second
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *
 * Examples:
 *   node calculator.js 10 + 5   => 15
 *   node calculator.js 10 - 3   => 7
 *   node calculator.js 4 * 6    => 24
 *   node calculator.js 20 / 4   => 5
 */

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Usage: node calculator.js <number1> <operator> <number2>');
  console.error('Operators: + - * /');
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Error: Both arguments must be valid numbers.');
  process.exit(1);
}

let result;

switch (operator) {
  case '+':
    // Addition: sum of num1 and num2
    result = num1 + num2;
    break;
  case '-':
    // Subtraction: difference of num1 and num2
    result = num1 - num2;
    break;
  case '*':
    // Multiplication: product of num1 and num2
    result = num1 * num2;
    break;
  case '/':
    // Division: quotient of num1 divided by num2
    if (num2 === 0) {
      console.error('Error: Division by zero is not allowed.');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error(`Error: Unsupported operator '${operator}'. Use +, -, *, or /`);
    process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
