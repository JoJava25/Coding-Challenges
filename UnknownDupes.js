function findDupsMiss(arr) {
    let copy = arr.slice().sort((a, b) => a - b);
    let missing = undefined;
    let duplicates = [];
    
    for (let i = 0; i < copy.length; i++) {
      if (duplicates.indexOf(copy[i]) !== -1) continue;
      if (copy[i] === copy[i - 1]) {
        duplicates.push(copy[i]);
        continue;
      }
      if (copy[i - 1] + 1 !== copy[i]) missing = copy[i - 1] + 1;
    }
    
    return [missing, duplicates];
  }