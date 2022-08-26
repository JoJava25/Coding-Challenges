function transposeTwoStrings(arr){
    var s1 = arr[0], 
        s2 = arr[1], 
        l = Math.max(s1.length, s2.length), 
        r = [];
    for (var i = 0; i < l; ++i) {
       r.push((s1[i]||' ') + ' ' + (s2[i]||' '));
    }
    return r.join('\n');
 }