function isAllPossibilities(x){
  
    if (x.length == 0){
      return false
    }
    for(let i = 0; i < x.length; i++){
      if(x.indexOf(i) < 0){
        return false
    }
      }
    return true
  }