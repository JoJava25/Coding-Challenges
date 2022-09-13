function solve(arr){
    let result = []
    arr.sort((a,b) => a - b)
    while(arr.length > 0){
      if(arr.length > 0){
        result.push(Number(arr.splice(-1,1).join('')))
      }
      if(arr.length > 0){
        result.push(Number(arr.splice(0,1).join('')))
      }
    }
    return result
  };