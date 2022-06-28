function cowboysDollars(boots) {
    const left = boots[0].split('&')
    const right = boots[1].split('&')
    
  const leftDolla = left[0].split('[(1)]').length - 1
  const rightDolla = right[0].split('[(1)]').length - 1
  return `This Rhinestone Cowboy has ${rightDolla} dollar bills in his right boot and ${leftDolla} in the left`
  }