function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

console.log(reverseString("code"))
console.log(reverseString("review"))
console.log(reverseString("paranormal"))