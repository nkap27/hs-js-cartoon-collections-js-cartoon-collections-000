function dwarfRollCall(dwarves){
  var output = ""

  for(var i = 0; i < dwarves.length; i++){
    output = output + `${i+1}. ${dwarves[i]} `
  }

  return output;
}

/*

function dwarfRollCall2(dwarves){
  var output = ""

  dwarves.forEach(function(dwarf, i){
    output = output + `${i+1}. ${dwarf} `
  })

  return output;
}



//USING THE MAP METHOD, creates a new array with the results of calling a function on every element in the calling array

function dwarfRollCall3(dwarves){


  var output = dwarves.map(function(dwarf, i){
    return `${i+1}. ${dwarf} `
  })

  return output.join('');
}

*/

function summonCaptainPlanet(planeteerCalls){
  var loudCalls = []

  for(var i = 0; i < planeteerCalls.length; i++){
    loudCalls.push(`${planeteerCalls[i].toUpperCase()}!`)
  }

  return loudCalls;
}

/*

function summonCaptainPlanet2(planeteerCalls){
  var loudCalls = []

  planeteerCalls.forEach(function(call){
    return loudCalls.push(`${call.toUpperCase()}!`)
  })

  return loudCalls;
}


function summonCaptainPlanet3(planeteerCalls){
  var loudCalls = planeteerCalls.map(function(call){
    return `${call.toUpperCase()}!`
  })
  return loudCalls;
}

*/

function longPlaneteerCalls(words){
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true
    }
  }
  return false
}

function findTheCheese(foods){
  for(var i = 0; i < foods.length; i++){
    if(foods[i]=== "cheddar" || foods[i] === "gouda" || foods[i]=== "camembert" || foods[i] === "swiss"){
      return foods[i]
    }
  }

  return "no cheese!"
}

/*

function findTheCheese2(foods){
  var cheeses = ["cheddar", "gouda", "camembert"]

  for(var i = 0; i < foods.length; i++){
    if(cheeses.includes(foods[i])){
      return foods[i]
    }
  }
  return "no cheese!"
}

*/
