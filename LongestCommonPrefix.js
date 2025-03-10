var longestCommonPrefix = function(arr) {
    let i = 1
    let prf = arr[0]
    while(i < arr.length){
        if(!arr[i].startsWith(prf)){
            prf = prf.slice(0, -1)
        }else{
            i++
        }
    }
    return prf
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["pretend", "preset", "predict"]))
console.log(longestCommonPrefix(["dog", "cat", "hippo"]))
console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["a"]))
console.log(longestCommonPrefix([","]))