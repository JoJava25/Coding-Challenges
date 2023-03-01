function arithmeticSequenceElements(a, d, n) {
	let sum = [a]
  let current = a
  for(let i = 0; i <= n - 2; i++){
    current += d
    sum.push(current)
  }
  return sum.join(", ")
}