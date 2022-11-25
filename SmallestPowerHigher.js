const findNextPower = ((num, n) => {
    const getSqrt = (1 / n)
    const getPowSqrt = num ** getSqrt
    const getCeil = Math.ceil(getPowSqrt)
    const getResultPow = getCeil ** n
    if (getResultPow <= num) {
        const getPlusCeil = getCeil + 1
        const result = getPlusCeil ** n
        return result
    } else {
        return getResultPow
    }
})