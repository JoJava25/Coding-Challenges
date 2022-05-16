function dropCap(n) {
    let arr = n.split(' ')
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > 2){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase()
      }
    }
    return arr.join(' ')
  }