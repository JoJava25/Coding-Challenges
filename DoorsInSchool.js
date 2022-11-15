function doors(n){
    let doors = new Array(n).fill('c');
    for ( let x = 1 ; x < n + 1 ; x++){
       doors = openAndShut(doors, x);    
    } 
    return doors.reduce(function(total,x){ return x == 'o' ? total+1 : total}, 0)
  }
  
  
  function openAndShut(arr, num) {
    let doors = arr;
    for (let i = num -1 ; i < arr.length + 1 ; i = i + num) {
      if(doors[i] === 'c') {
        doors[i] = 'o';
      }else if(doors[i] === 'o') {
        doors[i] = 'c'; 
        }
  }
  return doors;
  }