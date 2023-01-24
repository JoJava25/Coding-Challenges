function maxBeets(beets, loss) {
    let N = parseInt((beets - loss) / (2 * loss))
    return (N + 1) * (beets - loss * N)
  }