const twoSum = require('./twoSum')


test('array 2 elements, return 0 , 1 index', () => {
    expect(twoSum([1,1],2)).toBe([0,1])
})