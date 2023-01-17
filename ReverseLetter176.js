function reverseLetter(str) {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i]
    }
    return reversedString
}