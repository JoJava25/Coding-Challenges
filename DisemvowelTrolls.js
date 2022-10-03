function disemvowel(str) {
    let strArr = str.split('')
    for(let i = 0; i < strArr.length; i++){
      let v = strArr[i].toLowerCase()
      if(v === "a" || v === "e" || v === "i" || v === "o" || v === "u"){
        strArr.splice(i, 1)
        i = i - 1
      }
    }
    return strArr.join('')
  }