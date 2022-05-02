function bingo(a) {
    const bingo = [...new Set(a.filter(num => num === 2 || num === 7 || num === 9 || num === 14 || num === 15))]
    if(bingo.length === 5){
      return "WIN"
    }else{
      return "LOSE"
    }
  }