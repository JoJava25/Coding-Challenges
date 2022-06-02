function race(v1, v2, g) {
    if(v1 >= v2){
      return null
    }
    let arr = []
    let catchUp = g / (v2 - v1)
    arr.push(Math.floor(catchUp))
    catchUp = ((catchUp % 1) * 60) + .0001
    
    arr.push(Math.floor(catchUp))
    catchUp = (catchUp % 1) * 60
    
    arr.push(Math.floor(catchUp))
    return arr
  }