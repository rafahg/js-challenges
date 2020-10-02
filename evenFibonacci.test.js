const evenFibbo = require('./evenFibonacci');

test('it will return the list of fibbonacci sequence until one number', () =>{
    expect(evenFibbo(4000000)).toBe(100);
})