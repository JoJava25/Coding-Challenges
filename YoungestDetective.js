function missingWord(nums, str) {
    let letters =  str.split(' ').join('').toLowerCase()
    nums = nums.sort((a, b) => a - b)
    let result = []
    for(let i = 0; i <= nums.length - 1; i++){
      if(nums[i] <= letters.length - 1){
        result.push(letters[nums[i]])
      }else{
        return "No mission today"
      }
    }
    return result.join('')
  }