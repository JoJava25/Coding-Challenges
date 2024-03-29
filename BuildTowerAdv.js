function towerBuilder(nFloors, nBlockSz) {
    const w = nBlockSz[0], h = nBlockSz[1];
    const tower = [];
    
    for (let floor = 1; floor <= nFloors; floor++) {
      let stars = '*'.repeat(w * (floor * 2 - 1));
      let space = ' '.repeat(w * (nFloors - floor));
      for (let i = 0; i < h; i++) {
        tower.push(space + stars + space);
      }
    }
    
    return tower;
  }