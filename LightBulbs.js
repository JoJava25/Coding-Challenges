function lightBulbs(lights, n) {
    while (n-->0) {
      let next = lights.slice();
      for (let i=0; i<lights.length; i++)
        if (lights[i])
          next[(i+1)%lights.length] ^= 1;
      lights = next;
    }
    return lights;
  }