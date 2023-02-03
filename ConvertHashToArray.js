function convertHashToArray(hash){
    let result = []
    for(let keyAndValue of Object.entries(hash)){
      result.push(keyAndValue)
    }
    return result.sort()
  }