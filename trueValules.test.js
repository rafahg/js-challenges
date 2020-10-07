const trueValues = require("./trueValues");

test("it will return the number of values in the array", () => {
    expect(trueValues([true])).toBe(1)
})

test("it will return the number of values in the array", () => {
    expect(trueValues([false])).toBe(0)
})

test("it will return the number of values in the array", () => {
    expect(trueValues([true,true])).toBe(2)
})

