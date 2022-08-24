function rpsls(p1,p2){
    let wins = {
      scissors:['paper','lizard'],
      paper:['rock','spock'],
      rock:['lizard','scissors'],
      lizard:['spock','paper'],
      spock:['scissors','rock']
    }
    
    let player1 = wins[p1].includes(p2)
    let player2 = wins[p2].includes(p1)
    
    if (!player1 && !player2) { return 'Draw!' } 
    return `Player ${ player1?'1':'2'} Won!`
  }