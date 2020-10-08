const firstLast = require("./firstLast")



test("it will return element", () =>{
    expect(firstLast([1,2])).toStrictEqual([1,2])
})

test("it will return element", () => {
    expect(firstLast([1,6,true,"bob"])).toStrictEqual([1,"bob"])
})