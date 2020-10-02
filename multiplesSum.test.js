const multiplesSum = require('./multiplesSum')

test('it would return a sum for first 10 numberss', () => {
    expect(multiplesSum(10)).toBe("The solution is 23");
});

test('it would return sum of any number list',() => {
    expect(multiplesSum(1000)).toBe("The solution is 233168");
})