const average = require('./average');

test('it returns average', () => {
  expect(average([1,1,1])).toBe(1)
});