function whichBusToTake(busesColors, goingToSchool) {
    for(let i = 0; i <= busesColors.length; i++){
        if(busesColors[i] == "red"){
            if(goingToSchool[i] == true){
                return i
            }
        }
    }

    for(let i = 0; i <= busesColors.length; i++){
        if(busesColors[i] == "blue"){
            if(goingToSchool[i] == true){
                  return i
              }
        }
    }
}