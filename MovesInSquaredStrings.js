function vertMirror(str) {
    return str.split('\n').map(el => [...el].reverse().join('')).join('\n')
  }
  
  function horMirror(str) {
      return str.split('\n').reverse().join('\n')
  }
  
  function oper(fnctn, str) {
      return fnctn(str)
  }