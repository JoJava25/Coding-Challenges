function nextPal(val) {
    var pal = val + 1;
    while(pal !== Number((""+pal).split("").reverse().join(""))){
    pal++;
    }
    return pal;
    }