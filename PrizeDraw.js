function rank(names,weights, rank) {
    if (!names.length) return 'No participants' 
    var a = names.split(',').map (
         (name,i) => [name,weights[i]*[...name.toUpperCase()].reduce((t,c)=>t+c.charCodeAt()-64,name.length)]
       ).sort((p1,p2) => p2[1]-p1[1] || p1[0]>p2[0])
     return rank>a.length ? 'Not enough participants' : a[rank-1][0] 
}