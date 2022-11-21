const vm = (v = '0.0.1') => {
    let [ma, mi, pa] = [
      ...(v && v.split('.') || []),
      0, 0, 1
    ].map(n => +n)
    const allNum = [ma, mi, pa].every(n => !Number.isNaN(n))
    if (!allNum) throw Error('Error occured while parsing version!')
    const last = []
    let res
    const chain = (fn, rb = true) => () => {
      if (rb) last.push([ma, mi, pa])
      fn()
      return res
    }
    const rollback = chain(() => {
      const v = last.pop();
      if (typeof v === 'undefined') throw Error('Cannot rollback!')
      [ma, mi, pa] = v
    }, false)
    res = {
      major: chain(() => (++ma, mi = 0, pa = 0)),
      minor: chain(() => (++mi, pa = 0)),
      patch: chain(() => ++pa),
      release: () => `${ma}.${mi}.${pa}`,
      rollback,
    }
    return res
  };