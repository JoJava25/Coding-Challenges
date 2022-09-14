// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
    return names.sort((a,b) => {
    const nameA = a.toUpperCase()
    const nameB = b.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
  
    return 0
    })
  }
  