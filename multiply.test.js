const multiplyAll = require('./multiply');

test('multiply all elements of array', () => {
    expect(multiplyAll([1,2,3,4])).toBe(24);
})