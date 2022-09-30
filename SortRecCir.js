function sortByArea(array) {
    let array2 = [...array]
    return array2.sort((a, b) => {
      a = a.length === 2 ? a[0]*a[1] : Math.PI*(a**2)
      b = b.length === 2 ? b[0]*b[1] : Math.PI*(b**2)
      return a - b
    })}