const addUpNumbers = require('./addUpNumbers')


test("it will sum 1 number",() =>{
    expect(addUpNumbers(1)).toBe(1)
})

test("it will sum number 2",() =>{
    expect(addUpNumbers(2)).toBe(3)
})

