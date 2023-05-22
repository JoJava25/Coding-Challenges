let isPalindrome = function(s) {
    s = s.split(' ').join('').split('').filter(a => a.toLowerCase() != a.toUpperCase()).join('').toLowerCase()

    return s === s.split('').reverse().join('')
}




console.log(isPalindrome("do; me"))
console.log(isPalindrome("dad"))
console.log(isPalindrome("ma  @am"))
console.log(isPalindrome("student"))