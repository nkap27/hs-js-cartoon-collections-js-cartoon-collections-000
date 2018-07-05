function dwarfRollCall(dwarves) {
  var myString = "";

  for(var i = 0; i < dwarves.length; i++){
    myString = myString + `${i + 1}. ${dwarves[i]} `
  }

  return myString;
}

function summonCaptainPlanet(planeteerCalls){
  var loudCalls = [];

  for(var i = 0; i < planeteerCalls.length; i++){
    loudCalls.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return loudCalls;
}

function longPlaneteerCalls(words) {

  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  //cheddar, gouda, and camembert
  for(var i = 0; i < foods.length; i++){
    if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert"){
      return foods[i]
    }
  }
  return "no cheese!"
}
