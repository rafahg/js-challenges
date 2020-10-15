const { TestScheduler } = require('jest')
const changeEnough = require('./convenienceStore')


test('it will return something',() =>{
    expect(changeEnough(3, [1,2,3,4])).toBe("whatever")
})