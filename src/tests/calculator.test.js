const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Basic operations ---

describe('add', () => {
  test('adds two positive numbers', () => expect(add(10, 5)).toBe(15));
  test('adds a positive and negative number', () => expect(add(10, -3)).toBe(7));
  test('adds two zeros', () => expect(add(0, 0)).toBe(0));
});

describe('subtract', () => {
  test('subtracts two positive numbers', () => expect(subtract(10, 3)).toBe(7));
  test('subtracts resulting in a negative', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts zero', () => expect(subtract(5, 0)).toBe(5));
});

describe('multiply', () => {
  test('multiplies two positive numbers', () => expect(multiply(4, 6)).toBe(24));
  test('multiplies by zero', () => expect(multiply(4, 0)).toBe(0));
  test('multiplies two negatives', () => expect(multiply(-3, -4)).toBe(12));
});

describe('divide', () => {
  test('divides two positive numbers', () => expect(divide(20, 4)).toBe(5));
  test('divides resulting in a decimal', () => expect(divide(1, 4)).toBe(0.25));
  test('throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });
});

// --- Extended operations (from issue #1) ---

describe('modulo', () => {
  test('returns remainder of 5 % 2', () => expect(modulo(5, 2)).toBe(1));
  test('returns 0 when evenly divisible', () => expect(modulo(10, 5)).toBe(0));
  test('works with negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
  test('throws on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

describe('power', () => {
  test('raises 2 to the power of 3', () => expect(power(2, 3)).toBe(8));
  test('raises a number to the power of 0', () => expect(power(5, 0)).toBe(1));
  test('raises a number to the power of 1', () => expect(power(7, 1)).toBe(7));
  test('handles negative exponent', () => expect(power(2, -1)).toBe(0.5));
});

describe('squareRoot', () => {
  test('returns square root of 16', () => expect(squareRoot(16)).toBe(4));
  test('returns square root of 0', () => expect(squareRoot(0)).toBe(0));
  test('returns square root of 2 (irrational)', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });
  test('throws on square root of a negative number', () => {
    expect(() => squareRoot(-4)).toThrow('Cannot compute square root of a negative number.');
  });
});
