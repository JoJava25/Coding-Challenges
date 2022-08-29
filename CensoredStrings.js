function uncensor(infected, discovered) {
    let arr = infected.split('')
    let key = discovered.split('')
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === "*"){
        arr[i] = key.shift()
      }
    }
    return arr.join('')
  }