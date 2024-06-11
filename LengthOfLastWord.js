let lengthOfLastWord = function(s){
    let str = s.trim()

    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] === " "){
            return str.slice(i + 1).length
        }
    }
    return str.length
}


console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("From another planet"))
console.log(lengthOfLastWord(" what in gods name is   this "))
console.log(lengthOfLastWord("a"))