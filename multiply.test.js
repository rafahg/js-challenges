const multiplyAll = require('./multiply');
const multiplyAllWithFor = require('./multiply');

test('multiply all elements of array', () => {
    expect(multiplyAll([1,2,3,4])).toBe(24);
})

test('multiply all elements in other way', () => {
    expect(multiplyAllWithFor([1,2,3,4])).toBe(24);
})