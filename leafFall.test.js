const { TestScheduler } = require('jest')
const leafFall = require('./leafFall')

test('it should return the distance', () => {
    expect(leafFall(5)).toBe(40);
})