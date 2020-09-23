const twoSum = require('./twoSum')

// #1 Test, simple case scenario, 2 elements array.
test('array 2 elements, return 0 , 1 index', () => {
    // toStrictequal is used when we are dealing with arrays.
    expect(twoSum([1,1],2)).toStrictEqual([0,1])
})

// #2 Test, case array 3 elements, target is the sum of first two items.

test('array 2 elements, return next to each other indexes', () => {
    expect(twoSum([1,2,3],3)).toStrictEqual([0,1]);
})


test('array 2 elements, return next to each other indexes', () => {
    expect(twoSum([1,2,3],5)).toStrictEqual([1,2]);
})


// # Test case, array 3 elements, target is the sum of non consecutive items.

test('array 2 elements non consecutive sums target', () =>{
    expect(twoSum([2,5,8],10)).toStrictEqual([0,2])
})