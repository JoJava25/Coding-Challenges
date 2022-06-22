function howManyPizzas(n) {
    const area = (n * n) * Math.PI
    const eight = (8*8) * Math.PI
    let p = (area / eight)
    let leftOver = area - (Math.floor(p) * eight)
    let s = Math.round((leftOver / eight) * 8)
    return `pizzas: ${Math.floor(p)}, slices: ${s}`
  }