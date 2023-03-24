const isPalindrome = function(x){
    let str = x.toString()
    return str === str.split('').reverse().join('')
}

console.log(isPalindrome(121), 'true')
console.log(isPalindrome(65554), 'false')
console.log(isPalindrome(76067), 'true')
console.log(isPalindrome(-121), 'false')