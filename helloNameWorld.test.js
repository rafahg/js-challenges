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

test('returns the name capitalized', () => {
  expect(hello("john")).toBe("Hello, John!");
});

test('returns correct name if mid letters are capitalize', () =>{
  expect(hello("joHN")).toBe("Hello, John!");
});