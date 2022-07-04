function solution(arr, options) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
      result[index] = arr[index] + 2 * options.modifier
    }  
    return result;
  }