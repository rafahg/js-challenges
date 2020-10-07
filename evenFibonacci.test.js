const evenFibbo = require('./evenFibonacci');

test('it will return the list of fibbonacci sequence until one number', () =>{
    expect(evenFibbo(10)).toBe(44);
})

test('it will return the list of fibbonacci sequence until one number', () =>{
    expect(evenFibbo(400)).toBe(7.456482768619924e+83);
})