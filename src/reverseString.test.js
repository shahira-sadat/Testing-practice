const { reverseString } = require('./reverseString');

test('Should return reversed string', () => {
  const str = reverseString('ahmad likes painting');
  expect(str).toBe('gnitniap sekil damha');
});

test('Should do nothing if a first char is a digit', () => {
  const str = reverseString(' ');
  expect(str).toBe(' ');
});