let LengthOfLastWord = function(s){
    let str = s.trim()
    console.log(str)
    for(let i = str.length - 1; i <= 0; i--){
        console.log(str[i])
        if(str[i] === " "){
            console.log(str.slice(i))
            return str.slice(i + 1)
        }
    }
}

console.log(LengthOfLastWord("Hello World"))
console.log(LengthOfLastWord("From another planet"))
console.log(LengthOfLastWord(" what in gods name is   this "))