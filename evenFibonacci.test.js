const evenFibbo = require('./evenFibonacci');

test('it will return the list of fibbonacci sequence until one number', () =>{
    expect(evenFibbo(10)).toBe(44);
})