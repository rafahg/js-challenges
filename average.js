// Write function avg which calculates average of numbers in given list.

// Examples :

// (1,2,3) -> 2
// (4,8,3) -> 5

function sumArray(array) {
  const reducer = (a,b) => a + b;
  return array.reduce(reducer);
}; 


const average = (array) => {
   return sumArray(array) / array.length;
 };

 module.exports = average;