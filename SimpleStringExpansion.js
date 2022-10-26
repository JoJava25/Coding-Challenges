function stringExpansion(s) {
    if(s === ""){
      return ""
    }
    let arr = s.split('')
    let num = 1
    let result = ""
    for(let i = 0; i < arr.length; i++){
      if(isNaN(arr[i]) === false){
        num = (+arr[i])
      }else{
        for(let l = 1; l <= num; l++){
          result += arr[i]
        }
      }
      
    }
  return result
  }