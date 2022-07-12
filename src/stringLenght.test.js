const { stringLength } = require('./stringLength.js');

test('Length of "ahmad"', () => {
  const str = stringLength('ahmad');
  expect(str).toBe(5);
});

test('Length of string out of limit', () => {
  const str = stringLength('1ahmad likes painting');
  expect(str).toBe('Invalid string length');
});