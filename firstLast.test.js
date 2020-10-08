const firstLast = require("./firstLast")

test("it will return element", () =>{
    expect(firstLast([1,2])).toStrictEqual([1])
})

