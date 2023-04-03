function betweenExtremes(numbers) {
    let sortedArr = numbers.sort((a, b) => a - b)
    return sortedArr[sortedArr.length - 1] - sortedArr[0]
}