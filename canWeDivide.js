// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// examples:

// (12,2,6) -> true
// (11,3,4) -> false

function isDivisible(number, a, b) {
  if(number % a === 0 && number % b === 0) {
    return true;
  }else {
    return false;
  }
};

module.exports = isDivisible;