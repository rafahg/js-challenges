const dnaConversion = require('./dnaConversion')

test('testing the test', () => {
  expect(dnaConversion('GCAT')).toBe('GCAU')
});

