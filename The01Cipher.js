function encode(plaintext){
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let arr = plaintext.toLowerCase().split('')
    let result = []
    for(let i = 0; i <= arr.length - 1; i++){
      for(let l = 0; l <= letters.length - 1; l++){
        if(arr[i] === letters[l]){
          if(l % 2 === 0){
            arr.splice(i, 1, "0")
          }else{
            arr.splice(i, 1, "1")
          }
        }
      }
    }
    return arr.join('')
  }