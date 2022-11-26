function findWaldo(crowd) {
    let obj = {}
    crowd.forEach(line=> {
      line.split('').forEach(char=> obj[char] ? obj[char]+=1 : obj[char] = 1)
    })
    let waldo = Object.entries(obj).sort((a, b)=> a[1] - b[1])[0][0]
    let coord
    crowd.find((line, y)=>{
      const x = line.indexOf(waldo)
      if (x > -1) coord = [y, x]
    })
    return coord
  }