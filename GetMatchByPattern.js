function findMatchedByPattern(pattern) {
    return function (str) {
      let arr = pattern.split("")
  
      for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str[i]) === 0) {
          arr.splice(0, 1)
        } else if (arr.indexOf(str[i]) >= 1) {
          return false
        }
      }
      return arr.length <= 0
    }
  }