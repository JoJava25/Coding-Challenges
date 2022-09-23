const oneElement = (arr) => {
    if(arr.length === 1 && arr[0] === 'Like') {
      return arr[0];
    }
    if(arr.length === 1 && arr[0] === 'Dislike') {
      return arr[0];
    }
  }
  
  const counterLikeAndDislike = (array) => {
    let onButton = 'Nothing';
    let checkedButton = 0;
  
    for (let index = 0; index < array.length; index += 1) {
      if(checkedButton === 0 && array[index] === 'Like' || checkedButton === 1 && onButton === 'Dislike') {
        onButton = array[index];
        checkedButton = 1;
      } else if(array[index] === onButton) {
        onButton = 'Nothing';
        checkedButton = 0;
      }
      
      if(checkedButton === 0 && array[index] === 'Dislike' || checkedButton === 1 && onButton === 'Like') {
        onButton = array[index];
        checkedButton = 1;
      } else if(array[index] === onButton) {
        onButton = 'Nothing';
        checkedButton = 0;
      }
    }
    return onButton;
  }
  
  function likeOrDislike(buttons) {
    if(buttons.length === 0) return 'Nothing';
    if(buttons.length === 1) {
      const result = oneElement(buttons);
      return result;
    }
    return counterLikeAndDislike(buttons);
  }