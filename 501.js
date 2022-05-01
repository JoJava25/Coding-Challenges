function mxdiflg(a1, a2) {
    if(a1.length == 0 || a2.length == 0){
        return -1
    }
    let a1HL = [a1[0].length, a1[0].length]
    let a2HL = [a2[0].length, a2[0].length]
    
    for(let i = 0; i < a1.length; i++){
      if(a1HL[0] < a1[i].length){
        a1HL[0] = a1[i].length
      }
      if(a1HL[1] > a1[i].length){
        a1HL[1] = a1[i].length
      }
    }
    
    for(let x = 0; x < a2.length; x++){
      if(a2HL[0] < a2[x].length){
        a2HL[0] = a2[x].length
      }
      if(a2HL[1] > a2[x].length){
        a2HL[1] = a2[x].length
      }
    }
    if(a1HL[0] - a2HL[1] > a2HL[0] - a1HL[1]){
      return a1HL[0] - a2HL[1]
    }else{
      return a2HL[0] - a1HL[1]
    }
  }