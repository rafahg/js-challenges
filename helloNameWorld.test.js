const hello = require('./helloNameWorld');


test('returns the correct sentence', () =>{
  expect(hello("John")).toBe("Hello, John!");
  expect(hello("")).toBe("Hello, World!");
});