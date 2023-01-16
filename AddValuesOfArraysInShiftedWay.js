function addingShifted (arrays, shift) {
    let result = [];
    let start = 0;
    for (let array of arrays) {
      for (let i = 0; i < array.length; i += 1) {
        result[start + i] = (result[start + i] || 0) + array[i];
      }
      start += shift;
    }
    return result;
  }