function incrementer(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
      let add = nums[i] + i + 1
      if (add > 9){
        add = ~~add.toString().split('').pop()
      }
      result.push(add)
    }
    return result
  }