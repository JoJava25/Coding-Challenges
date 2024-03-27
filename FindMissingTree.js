function findTheMissingTree(trees) {
    const obj = {}
    
    for( let i = 0; i < trees.length; i++){
      if(!obj[trees[i]]){
        obj[trees[i]] = [trees[i]]
      }
      obj[trees[i]].push(trees[i])
    }
    let result = []
    Object.values(obj).map((el, index) => {
      if(index === 0){
        result.push(el)
      }
      if(el.length < result[0].length){
        result.push(el)
      }
      
    })
     return result[result.length - 1][0]
  }