const { TestScheduler } = require('jest')
const changeEnough = require('./convenienceStore')


test('it will return the total amount in the pockets!, in pennies',() =>{
    expect(changeEnough(3, [1,0,0,0])).toBe(25)
})