// Given an Array in integers and integer K, return the maximum sum S, that there exist i < j with A[i] + A[j] = S , and at the same time S < K
// If there is no possible outcome to comply with the conditions, return -1

// example: 

// A = [2,3,5,12]
// K = 18
// Output = 17.

// We can use 5 + 12 , and the result is less than K. 

// example 2:

// A = [10,20,40], K =29

// outputs = -1

// It is not possible to sum any of the elements and at the same time S being < K (30 > 29)


function twoSumLessK(arr, k) {
   for(let i=0; i< arr.length; i++) {
       for(let j=i+1; j< arr.length; j++){
           let s = arr[i] + arr[j];
           if( k < s){
             let a = [];
             let list = a.push(s);
             return list;
           }else {
               return -1;
           }
       }
   }
}


module.exports = twoSumLessK;