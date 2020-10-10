// Given 2 arguments, a number and another number meaning the length,
// create a function wich return an array which start with the number and contains as many 
// multiples as the length provided including the number itself.
// Example = 3,5
// output = [3,6,9,12,15]
// Example = 5,6
// output = [5,10,15,20,25,30]



 function arrayMultiples(number, length){
     let result = [];
    for(let i=0; i < length; i++) {
        result.push(number * (i + 1))
    }

    return result;
 }


 module.exports = arrayMultiples;
