function multiplyAll (array) {
 return array.reduce((a,b) => a * b);
}

//another way to do the same.

function multiplyAllWithFor (array) {
    let sum = 1;
    for(i=0; i<array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

module.exports = multiplyAll;
module.exports = multiplyAllWithFor;

