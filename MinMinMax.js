function minMinMax(array) {
    let result = Math.min(...array)
    while (array.includes(result)) {
      result++
    }
    return [Math.min(...array), result, Math.max(...array)]
  }