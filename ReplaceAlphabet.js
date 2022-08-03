function alphabetPosition(text) {
    const mappedArray = []
     text.trim().toLowerCase().split("").forEach(char => {
        const letter = char.charCodeAt()
        if(letter >= 97 && letter <= 122){
           mappedArray.push(letter - 96)
        }
     })
     return mappedArray.join(' ')
  }