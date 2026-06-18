#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + (addition)        - adds two numbers
 *   - (subtraction)     - subtracts the second number from the first
 *   * (multiplication)  - multiplies two numbers
 *   / (division)        - divides the first number by the second
 *   % (modulo)          - returns the remainder of a divided by b
 *   ** (exponentiation) - returns base raised to the exponent
 *   sqrt (square root)  - returns the square root of n (single operand)
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *   node calculator.js sqrt <number>
 *
 * Examples:
 *   node calculator.js 10 + 5    => 15
 *   node calculator.js 10 - 3   => 7
 *   node calculator.js 4 * 6    => 24
 *   node calculator.js 20 / 4   => 5
 *   node calculator.js 10 % 3   => 1
 *   node calculator.js 2 ** 8   => 256
 *   node calculator.js sqrt 16  => 4
 */

/**
 * Returns the remainder of a divided by b.
 * @param {number} a - dividend
 * @param {number} b - divisor (must not be zero)
 */
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed.');
  return a % b;
}

/**
 * Returns base raised to the power of exponent.
 * @param {number} base
 * @param {number} exponent
 */
function power(base, exponent) {
  return base ** exponent;
}

/**
 * Returns the square root of n.
 * @param {number} n - must be a non-negative number
 */
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot compute square root of a negative number.');
  return Math.sqrt(n);
}

/**
 * Returns the sum of a and b.
 * @param {number} a
 * @param {number} b
 */
function add(a, b) { return a + b; }

/**
 * Returns the difference of a minus b.
 * @param {number} a
 * @param {number} b
 */
function subtract(a, b) { return a - b; }

/**
 * Returns the product of a and b.
 * @param {number} a
 * @param {number} b
 */
function multiply(a, b) { return a * b; }

/**
 * Returns the quotient of a divided by b.
 * @param {number} a
 * @param {number} b - must not be zero
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed.');
  return a / b;
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Run CLI only when executed directly
if (require.main === module) {
  const args = process.argv.slice(2);

  // Handle single-operand sqrt: node calculator.js sqrt <number>
  if (args.length === 2 && args[0] === 'sqrt') {
    const n = parseFloat(args[1]);
    if (isNaN(n)) { console.error('Error: Argument must be a valid number.'); process.exit(1); }
    try {
      console.log(`sqrt(${n}) = ${squareRoot(n)}`);
    } catch (e) {
      console.error(`Error: ${e.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('       node calculator.js sqrt <number>');
    console.error('Operators: + - * / % **');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
  }

  try {
    let result;
    switch (operator) {
      case '+':  result = add(num1, num2); break;
      case '-':  result = subtract(num1, num2); break;
      case '*':  result = multiply(num1, num2); break;
      case '/':  result = divide(num1, num2); break;
      case '%':  result = modulo(num1, num2); break;
      case '**': result = power(num1, num2); break;
      default:
        console.error(`Error: Unsupported operator '${operator}'. Use +, -, *, /, %, or **`);
        process.exit(1);
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }
}
