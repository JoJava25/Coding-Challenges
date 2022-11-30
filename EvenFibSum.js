function fibonacci(max) {
    if (max < 2) return 0
    let [a, b] = [1,0],
    sum = 0
    while (b < max) {
         [a,b] = [b, a + b]
        if (b % 2 === 0 && b < max) sum+=b
           }
    return sum
}