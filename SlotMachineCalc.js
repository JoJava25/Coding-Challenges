const calculateWin = lines =>
  withDiags(lines).map(score).reduce((a,b) => a + b)

const withDiags = ([a, b, c]) => (
  d = [a[0],b[1],c[2],b[3],a[4]],
  e = [c[0],b[1],a[2],b[3],c[4]],
  [a,b,c,d,e]
)

const score = ([a,b,c,d,e]) =>
  a != b || b != c ? 0
  : c != d ? 50
  : d != e ? 150
  : 300