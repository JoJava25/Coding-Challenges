function smaller(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
      let small = 0
      for(let l = i; l < nums.length; l++){
        if(nums[l] < nums[i]){
          small++
        }
      }
      result.push(small)
    }
    return result
  }