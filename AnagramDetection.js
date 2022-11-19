const isAnagram = function(test, original) {
    if(test.length !== original.length) { return false }
    return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("")
}