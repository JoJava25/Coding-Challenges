function sumDigNthTerm(initval, patternl, nthterm) {
    let x = 0
      for(let i = 1; i < nthterm; i++){
        initval += patternl[x]
        if(x == patternl.length - 1){
          x = 0
        }else{
          x++
        }
      }
    return initval.toString().split('').reduce((a,b) => Number(a) + Number(b), 0)
  }