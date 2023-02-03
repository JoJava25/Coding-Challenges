const False = (dt1) => (dt2) => {
    return dt1
  }
  
  const True = (dt1) => (dt2) => { 
      return dt2
  }
  
  const iff = (b) => (dt1) => (dt2) => { 
    if(b.name === "True") {
      return dt1
    }
    
    return dt2
  }