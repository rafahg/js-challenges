// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function multiplesSum(number) {
    let list = [];
    for(let i=1; i<number; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
          list.push(i);
      }
    }
    const solution =  list.reduce((a,b) => a + b, 0);
    return `The solution is ${solution}`;
};

module.exports = multiplesSum;