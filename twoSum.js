function twoSum(arr,target) {
  for(let i=0; i < arr.length; i++) {
      for(let k= i + 1; k < arr.length; k++) {
      if(target === arr[i] + arr[k]) {
          let result = [i,k]
          return result;
      }
    }
      
  }
}


module.exports = twoSum;