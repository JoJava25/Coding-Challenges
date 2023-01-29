function truncateString(str, num) {
  
    let valueNum = str.length <= num
    let validationNum = num > 3 ? num - 3 : num
    let replaceLetter = str.slice(0,validationNum)
    
    
    return valueNum ? str : replaceLetter + '...'
  }