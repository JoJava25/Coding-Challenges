function canEscape(walls) {
    let room = walls.length
    for(let i = 0; i < walls.length; i++){
      let position = i + 1
      if(walls[i][0] <= position || walls[i][1] <= position){
        return false
      }
    }
    return true
  }