function montyHall(correctDoorNumber, participantGuesses) {
    const wins = participantGuesses.filter(guess => guess !== correctDoorNumber).length;
    const winPercentage = Math.round(wins * 100 / participantGuesses.length);
    return winPercentage;
  }