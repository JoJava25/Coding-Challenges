function sortDict(dict){
    sorted = []
    for (let key in dict) {
        sorted.push([parseInt(key) || key, dict[key]])
    }
    return sorted.sort(function(a, b) {
      if (a[1]==b[1]) return 0
      if (a[1]>b[1]) return -1
      if (a[1]<b[1]) return 1
    });
  }