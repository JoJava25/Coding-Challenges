function countConsonants(str) {
      let numConsonants = 0
      let consonants = ""
      const alphabet = "bcdfghjklmnpqrstvwxyz"
      
      for (let i = 0; i < str.length; i++) {
        consonant = str[i].toLowerCase()
        if (alphabet.includes(consonant)) {
          if ( !consonants.includes(consonant) ) {
            numConsonants++
            consonants += consonant
          }
        }
      }
      
      return numConsonants
    }