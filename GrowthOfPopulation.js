function nbYear(p0, percent, aug, p) {
    let i = 1;
    let mult = 1 + percent / 100.0;
    let prev = p0;
    while (prev < p) {
        let ne = Math.floor(prev * mult + aug)
        prev = ne
        i++;
    }
    return (i - 1);
}