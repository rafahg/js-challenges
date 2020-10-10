const { TestScheduler } = require("jest")
const arrayMultiples = require("./arrayMultiples")

test("it will return an array with 1 mutiple",() =>{
    expect(arrayMultiples(1,1)).toStrictEqual([1])
})

test("it will return an array with 1 mutiple",() =>{
    expect(arrayMultiples(3,4)).toStrictEqual([3,6,9,12])
})
