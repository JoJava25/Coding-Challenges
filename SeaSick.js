function seaSick(x){
    let arr = x.split("")
    let result = "No Problem"
    let shift = 0
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] !== arr[i+1]){
            shift++
        }
    }
    if(shift > (arr.length / 5)){
        result = "Throw Up"
    }
    return result
}

console.log(seaSick("~~_~_~_~_~", "Throw Up"))