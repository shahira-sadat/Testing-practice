const { capitalize } = require('./capitalize');

test('Should return string capitalized', () => {
  const str = capitalize('ahmad likes painting');
  expect(str).toBe('Ahmad likes painting');
});

test('Should do nothing if a first char is a digit', () => {
  const str = capitalize('1ahmad likes painting');
  expect(str).toBe('1ahmad likes painting');
});