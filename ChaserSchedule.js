const solution = (s, t) => {
    let distance = s * t
    const maxSprints = Math.ceil(t / 2)

    for (let i = 0; i < maxSprints; i++) {
        if (s - 3 * i > 0) distance += s - 3 * i
    }

    return distance
}