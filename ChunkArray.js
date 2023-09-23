let chunk = function(arr, size){
    let result = []
    let chunk = []
    
    for(let i = 0; i < arr.length; i++){
        chunk.push(arr[i])
        if(chunk.length == size){
            result.push(chunk)
            chunk = []
        }
    }
    if(chunk.length){
        result.push(chunk)
    }
    return result
}