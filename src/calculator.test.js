const { calculator } = require('./calculator');

describe('addition', () => {
test('Should return addition of two numbers', () => {
  const num = calculator.add(3, 3);
  expect(num).toBe(6);
});

test('Should return addition of two numbers', () => {
  const num = calculator.add(5, 2);
  expect(num).toBe(7);
});

test('Should return addition of two strings', () => {
  const num = calculator.add('abc', 'abc');
  expect(num).toBe('abcabc');
});
});

describe('substraction', () => {
test('Should return substraction of two numbers', () => {
  const num = calculator.subtract(3, 3);
  expect(num).toBe(0);
});

test('Should return substraction of two numbers', () => {
  const num = calculator.subtract(7, 2);
  expect(num).toBe(5);
});

test('Should return not a number', () => {
  const num = calculator.subtract('abc', 'abc');
  expect(num).toBe(NaN);
});
});

describe('multyplication', () => {
test('Should return multyplication of two numbers', () => {
  const num = calculator.multiply(3, 3);
  expect(num).toBe(9);
});

test('Should return multyplication of two numbers', () => {
  const num = calculator.multiply(5, 2);
  expect(num).toBe(10);
});

test('Should return not a number', () => {
  const num = calculator.multiply('abc', 'abc');
  expect(num).toBe(NaN);
});
});

describe('division', () => {
test('Should return division of two numbers', () => {
  const num = calculator.divide(3, 3);
  expect(num).toBe(1);
});

test('Should return division of two numbers', () => {
  const num = calculator.divide(12, 3);
  expect(num).toBe(4);
});

test('Should return not a number', () => {
  const num = calculator.divide('abc', 'abc');
  expect(num).toBe(NaN);
});

test('Should return Infinity', () => {
  const num = calculator.divide(3, 0);
  expect(num).toBe(Infinity);
});
});