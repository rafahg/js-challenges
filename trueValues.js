//Create a function which return the number of true values in an Array 
// Given an array, "list", which contains a number of true elements,
// like [true,false,true] => 2.


function countTrues(list) {
    let sum = 0
    list.forEach(item => {
        if(item === true) {
            sum +=1
        }
    })
   return sum;
};


module.exports = countTrues;