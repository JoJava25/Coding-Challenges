function isValidWalk(walk) {
    if(walk.length != 10){
      return false
    }
    let n = 0
    let s = 0
    let e = 0
    let w = 0
    
    for(let i = 0; i < walk.length; i++){
      if(walk[i] === 'n'){
        n++
      }else if(walk[i] === 's'){
        s++
      }else if(walk[i] === 'e'){
        e++
      }else if(walk[i] === 'w'){
        w++
      }
    }
    if(n === s && e === w){
      return true
    }else{
      return false
    }
  }