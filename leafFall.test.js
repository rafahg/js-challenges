const { TestScheduler } = require('jest')
const leafFall = require('./leafFall')

test('it should return the distance', () => {
    expect(leafFall(5)).toBe(80);
})

test('it shoud return 0 if speed is negative', () => {
    expect(leafFall(-5)).toBe(0);
})

test('it should return 0 if speed is 0', () =>{
    expect(leafFall(0)).toBe(0);
})