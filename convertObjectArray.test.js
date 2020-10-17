const { TestScheduler } = require('jest');
const converObjectArray = require('./convertObjectArray');

test('First test',() =>{
  expect(converObjectArray()).toBe(1)
})