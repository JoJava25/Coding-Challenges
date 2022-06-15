function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
      for(let x = 0; x < numbers.length; x++){
        if(numbers[i] + numbers[x] === target && i != x){
          return [i, x]
        }
      }
    }
  }