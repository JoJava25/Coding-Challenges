<<<<<<< HEAD
function towerBuilder(nFloors) {
    if(nFloors === 0){
      return []
    }
    let result = []
    let floor = '*'
    for(let i = 1; i <= nFloors; i++){
      result.push(floor)
      floor += '**'
    }
    let size = result[result.length - 1].length
    for(let i = 0; i < result.length - 1; i++){
      let sides = (size - result[i].length) / 2
      
      for(let x = 1; x <= sides; x++){
        result[i] = result[i].slice(0, 0) + ' ' + result[i].slice(0)
        result[i] = result[i] + ' '
      }
    }
    return result
  }
=======

>>>>>>> 6a23c4846897cdbf2ca0e77a8920692926c2d1de
