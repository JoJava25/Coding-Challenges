function freqSeq(str, sep) {
    let nums = {}
    let arr = str.split('')
    for(let i = 0; i < arr.length; i++){
      let letter = arr[i]
      
      if(nums[letter]){
        nums[letter]++
        }else if(! nums[letter]){
          nums[letter] = 1
        }
    }
    
    for(let i = 0; i < arr.length; i++){
      let letter = arr[i]
      for(const p in nums){
        if (letter === p){
          arr[i] = `${nums[p]}${sep}`
        }
      }
    }
      
      return arr.join('').slice(0,-1)
  }