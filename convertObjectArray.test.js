const { TestScheduler } = require('jest');
const convertObjectArray = require('./convertObjectArray');
const converObjectArray = require('./convertObjectArray');

test('Return an array of with pair key, values',() =>{
  expect(converObjectArray({foo: 1, bar: 2})).toStrictEqual([["foo",1],["bar",2]])
})

test('Return a bigger array of pair key, values',() =>{
  let example = {foo:1, bar:2, superBar:3, miniBar:4}
  expect(convertObjectArray(example)).toStrictEqual()
})