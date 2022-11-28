const count = xs => [...xs.toLowerCase()].filter(x => 'aeiouäöü'.indexOf(x) > -1).length

function derDieDas(wort){
   let c = count(wort)
   let a = c > 3 ? 'der' : c > 1 ? 'die' : 'das'
   return `${a} ${wort}`
}