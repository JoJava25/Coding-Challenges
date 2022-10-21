function vaporcode(string) {
    let arr = string.toUpperCase().split('')
    let noSpace = arr.filter(item => item !== ' ')
    let result = noSpace.join('  ')
    return result;
  }