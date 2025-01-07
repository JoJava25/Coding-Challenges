function deepSort(arr, asc) {
    if(!Array.isArray(arr)) return arr;
    
    arr.forEach(v => deepSort(v, asc));
    const sum = arr.reduce((s, v) => s + v, 0);
    arr.valueOf = () => sum;
    
    return arr.sort((a, b) => asc ? a - b : b - a);
  }