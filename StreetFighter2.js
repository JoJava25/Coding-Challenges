function streetFighterSelection(fighters, position, moves){
    let result = []
    for(let i = 0; i < moves.length; i++){
      if(moves[i] === "up" && position[0] > 0){
        position[0]--
      }else if(moves[i] === "down" && position[0] < 1){
        position[0]++
          }else if(moves[i] === "left"){
            position[1]--
            if(position[1] < 0){
              position[1] = fighters[1].length - 1
            }
          }else if(moves[i] === "right"){
            position[1]++
            if(position[1] > 5){
              position[1] = 0
            }
        }
      result.push(fighters[position[0]][position[1]])
    }
    return result
  }