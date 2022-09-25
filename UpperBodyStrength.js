function alexMistakes(numberOfKata, timeLimit){

    var restTime = timeLimit - numberOfKata * 6;
    var count = 0;
    var currentPushupTime = 5;
    
    while (restTime >= currentPushupTime){
        count++;
        restTime -= currentPushupTime;
        currentPushupTime *= 2;
    }
    
    return count
  }