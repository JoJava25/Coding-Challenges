let isPalindrome = function(s) {
    s = s.split(' ').join('').toLowerCase()
    return s === s.split('').filter(a => a.toLowerCase() != a.toUpperCase()).reverse().join('')
    
}




console.log(isPalindrome("do; me"))
console.log(isPalindrome("dad"))
console.log(isPalindrome("ma  @am"))
console.log(isPalindrome("student"))