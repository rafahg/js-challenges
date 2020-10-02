const evenFibbo = require('./evenFibonacci');

test('it will return the list of fibbonacci sequence until one number', () =>{
    expect(evenFibbo(100)).toBe(3)
})