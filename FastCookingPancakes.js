function cookPancakes(n, m){
    let time = Math.ceil((n * 2) / m)
    return time === 1 ? 2 : time
}