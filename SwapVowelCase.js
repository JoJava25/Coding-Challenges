function swapVowelCase(str) {
    let arr = str.split('')
    let vowels = ["a","e","o","u","i","A","E","O","U","I"]
    for(let i = 0; i < arr.length; i++){
      if(vowels.includes(arr[i])){
        if(arr[i] === arr[i].toLowerCase()){
          arr[i] = arr[i].toUpperCase()
          } else {
              arr[i] = arr[i].toLowerCase()
            }
      }
      }
    return arr.join('')
  }