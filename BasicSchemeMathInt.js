function scheme(cmd) {
    const elems = cmd.replace(/[\(\)]/g,'').split(' ').map((v,i)=> i !== 0 ? +v : v)
    switch (elems[0]) {
        case '-': return elems.length === 1 ? 0 : elems.slice(1).reduce((s,v)=>s-v)
        case '+': return elems.length === 1 ? 0 : elems.slice(1).reduce((s,v)=>s+v)
        case '*': return elems.length === 1 ? 1 : elems.slice(1).reduce((p,v)=>p*v)
        case '/': return elems.slice(1).reduce((d,v)=>d/v)
    }
  }