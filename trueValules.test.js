const trueValues = require("./trueValues");

test("it will return the number of values in the array", () => {
    expect(trueValues([true])).toBe(1)
})
