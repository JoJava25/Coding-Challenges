function bulbMaze(maze){
    for(let i = 0; i < maze.length; i++){
      if(i % 2 == 0){
        if(maze[i] == "o"){
          return false
        }
      }else{
        if(maze[i] == "x"){
          return false
        }
      }
    }
      return true
  }