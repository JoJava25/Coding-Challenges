const door = events => {
    let result = '',
      position = 0,
      moving = 0,
      direction = 1;
  
    for (let event of events.split('')) {
      if (event == 'O') direction *= -1;
      else if (event == 'P') moving ^= 1;
  
      let tmp = position + moving * direction;
      if (tmp < 0 || tmp > 5) {
        moving = 0;
        direction *= -1;
      } else position = tmp;
  
      result += position;
    }
    return result;
  }