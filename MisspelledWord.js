var mispelled = (word1, word2) => {
    if(Math.abs(word1.length - word2.length) < 2){
        if(word1.includes(word2) || word2.includes(word1)){
            return true
        }else{
        let dismatch = 0;
        for (let i in word1) {
          if(word1[i] !== word2[i]){
                dismatch++;
           }
          } 
          return dismatch < 2
        }
    } return false
}