//create a function that returns the first and last elements of an array, in other array of those elements.a
//Example -----> ["paul",2,true] = > ["paul",true]

function firstLast(arr) {
  let newArr = []
  newArr.push(arr[0])
  newArr.push(arr[arr.length - 1])
  return newArr
}

module.exports = firstLast;