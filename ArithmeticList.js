let seqlist =function(first,c,l){
    let arr = [first]
    let add = first
    for(i = 1; i < l; i++){
        add = add + c
        arr.push(add)
    }
    return arr
}