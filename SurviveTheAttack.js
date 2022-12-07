function hasSurvived(att2, def2) {
    let att = [...att2]
    let def = [...def2]
      let initA = att.reduce((s, e) => (s += e), 0)
      let initD = def.reduce((s, e) => (s += e), 0)
  
      for (let i = 0; i < Math.min(att.length, def.length); i++) {
          if (att[i] > def[i]) {
              delete def[i]
          } else if (def[i] > att[i]) {
              delete att[i]
          } else {
              delete def[i]
              delete att[i]
          }
      }
  
      att = att.filter(e=>e)
      def = def.filter(e=>e)
  
      if (att.length !== def.length) return def.length > att.length
      if (initA !== initD) return initD > initA
      return true
  }