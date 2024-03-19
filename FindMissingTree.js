function findTheMissingTree(trees){
    let count = {}
    let result = 0
    let min = infinity
    for(let i = 0; i < trees.length; i++){
        let size = trees[i]
        if(count[size]){
            count[size]++
        }else{
            count[size] = 1
        }
    }

    for(x in count){
        if(count[x] < min){
            min = count[x]
            result = 
        }
    }

    return count
}

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