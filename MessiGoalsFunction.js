function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let goals = [ laLigaGoals, copaDelReyGoals, championsLeagueGoals ]
    return goals.reduce( ( a, b ) => a + b ,0)
  }