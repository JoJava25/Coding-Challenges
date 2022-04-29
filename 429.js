function vowelIndices(word){
    let result = []
    let vowels = /[aeiouy]/i
    for(let i = 0; i < word.length; i++){
      if(vowels.test(word[i])){
        result.push(i + 1)
      }
    }
    return result
  }