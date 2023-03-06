let map = {
    'a': 4,
    'A': 4,
    'e': 3,
    'E': 3,
    'l': 1
  }
  
  function nerdify(txt){
    return txt
            .split('')
            .map(x => map[x] ? map[x] : x)
            .join('');
  }