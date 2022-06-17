function arrayDiff(a, b) {
    for(let x = 0; x < b.length; x++){ 
      for(let i = 0; i < a.length; i++){
        if(b[x] === a[i]){
          a.splice(i, 1)
          i--
        }
      }
    }
    return a
  }