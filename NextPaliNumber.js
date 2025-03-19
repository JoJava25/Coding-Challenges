function nextPal(val) {
    let pal = val + 1
    while(pal !== Number((""+pal).split("").reverse().join(""))){
        pal++
    }
    return pal
    }