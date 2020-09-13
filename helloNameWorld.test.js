const hello = require('./helloNameWorld');


test('returns the correct sentence', () =>{
  expect(hello("John")).toBe("Hello, John!");
});

test('returns Hello, World! if string is empty', () => {
  expect(hello("")).toBe("Hello, World!");
});

test('returns Hello, World! if no argument is passed', () => {
  expect(hello()).toBe("Hello, World!");
});