function twoSum(arr,target) {
  for(let i=0; i < arr.length; i++) {
      if(target === arr[i] + arr[i+1]) {
          let result = [i,i+1]
          return result;
      }
      
  }
}


module.exports = twoSum;