function trianglePerimeter(ᐃ) {
    let ab = Math.hypot(ᐃ.a.x-ᐃ.b.x, ᐃ.a.y-ᐃ.b.y)
    let bc = Math.hypot(ᐃ.b.x-ᐃ.c.x, ᐃ.b.y-ᐃ.c.y)
    let ca = Math.hypot(ᐃ.c.x-ᐃ.a.x, ᐃ.c.y-ᐃ.a.y)
    return ab + bc + ca
  }