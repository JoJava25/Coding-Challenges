function XO(str) {
    let freq = {}
    let arr = str.split('')
    for(let i = 0; i < arr.length; i++){
      let letter = arr[i].toLowerCase()
      if(freq[letter]){
        freq[letter]++
        }else if(! freq[letter]){
          freq[letter] = 1
        }
    }
    return(freq.x === freq.o ? true : false)
  }