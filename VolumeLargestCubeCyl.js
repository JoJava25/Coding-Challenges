function cubeVolume(h, r) {
    let s = r*Math.SQRT2
    
    let ifHeight = h**3
    let ifRadius = s**3
    
    return Math.min(ifHeight, ifRadius)
  }