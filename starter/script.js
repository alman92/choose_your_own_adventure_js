function story(){
  var starter = prompt("Prof. Oak starts you off with one starter pokemon.  You can choose: The Grass-type BULBASAUR, Water-type SQUIRTLE, Fire-type CHARMANDER or the Electric-type PIKACHU").toLowerCase();
  if (starter == "bulbasaur"){
    return city1();
  }
  else if (starter == "charmander"){
    return city2();
  }
  else if(starter == "squirtle"){
    return city3();
  }
  else if(starter == "pikachu"){
    return city4();
  }
}
  // After starter is chosen, player moves to a city for a gym battle//
  function city1(){
    while(true){
    var round1 = prompt("Would you like to go to Pewter City and fight BROCK or go to Cinnabar Island and fight BLAINE?").toLowerCase();
      if (round1 == "brock"){
      Saffron();
      break;
    }
    else if(round1 == "blaine"){
    alert("Bulbasaur is scorched by Blaine's Ponyta. You lose very quickly and are sent back home.")
    break
      }
    }
  }
  function city2(){
    while(true){
    var round1 = prompt("Would you like to go to Celadon City and fight ERIKA or go to Cerulean City and fight MISTY?").toLowerCase();
    if (round1 == "erika"){
      Cinnabar();
      break;
    }
    else if(round1 == "misty"){
    alert("Charmander is no match for Misty's Starmie and its Hydro Pump. You lose very quickly and are sent back home.")
      }
    }
  }
  function city3(){
    while(true){
    var round1 = prompt("Would you like to go to Vermilion City and fight LT.SURGE or go to Cinnabar Island and fight BLAINE?").toLowerCase();
    if (round1 == "blaine"){
      Fuchsia();
      break;
    }
    else if (round1 == "lt. surge"){
    alert("Raichu shocks Squirtle into submission with a quick Thunderbolt.  You lose and are sent back home.")
      }
    }
  }
  function city4(){
    while(true){
    var round1 = prompt("Would you like to go to Cerulean City and fight MISTY or go to Pewter City and fight BROCK?").toLowerCase();
    if (round1 == "misty"){
      Viridian();
      break;
    }
    else if (round1 == "brock"){
      alert("Pikachu's Thunderbolt is ineffective against Onix. You lose and are sent back home.")
      }
    }
  }

    // Player moves to next city//
  function Saffron(){
    alert("Bulbasaur defeats Brock because Grass-types are strong against Rock-types!")
    var pokemon1 = prompt("You decide to go to Saffron City next, but need more Pokemon to challenge the gym leader, Sabrina.  Do you stop in Lavander Town and catch a HAUNTER or beat the Fighting Dojo Leader and win a HITMONCHAN?").toLowerCase();
    if (pokemon1 == "haunter"){
      elite4();
    }
    else if (pokemon1 == "hitmonchan"){
      alert("Hitmonchan is outsmarted by Sabrina's Alakazam and its Psychic moves.")
    }
  }
  function Cinnabar(){
    alert("Charmander defeats Erika because Fire-types are strong against Grass-types!")
    var pokemon1 = prompt("You decide to go to Cinnabar Island next, but need more Pokemon to challenge the gym leader, Blaine.  Do you surf Route 32 and catch a STARMIE or search Viridian Forest for a VICTREBELL?").toLowerCase();
    if (pokemon1 == "starmie"){
      elite4();
    }
    else if(pokemon1 == "victrebell"){
      alert("Victrebell is scorched by Blaine's Arcanine.")
    }
  }
  function Fuchsia(){
    alert("Squirtle defeats Blaine because Water-types are strong against Fire-types!")
    var pokemon1 = prompt("You decide to go to Fuchsia City next, but need more Pokemon to challenge the gym leader, Koga.  Do you traverse Mt. Moon to catch CLEFABLE or search Saffron City for a HYPNO?").toLowerCase();
    if (pokemon1 == "hypno"){
      elite4();
    }
    else if(pokemon1 == "clefable"){
      alert("Clefable is poisoned by Koga's Venomoth.")
    }
  }
  function Viridian(){
    alert("Pikachu defeats Misty because Electric-types are strong against Water-types!")
    var pokemon1 = prompt("You decide to go to Viridian City next, but you need more Pokemon to challenge the gym leader, Giovanni. Do you search the Safari Zone for a PIDGEOT or do you burrow through the Rock Tunnel to find a GOLEM?").toLowerCase();
    if (pokemon1 == "pidgeot"){
      elite4();
    }
    else if(pokemon1 == "golem"){
      alert("Golem is crushed by Giovanni's Nidoqueen.")
    }
  }
  function elite4(){
    alert("You defeated the final gym! You have made your way to the Indigo Plateau to challenge the Elite Four.")
    var Indigo = prompt("On your way, you have caught and trained 6 powerful Pokemon. For every battle you will be able to call just one Pokemon. \n\nThe 6 Pokemon you caught are GENGAR, ALAKAZAM, MAGMAR, CHANSEY, LAPRAS and DRAGONITE. \n\nYour first challenger is the Ice Master Lorelei.  Pick the Pokemon you think will defeat her!").toLowerCase();
    switch(Indigo){
      case "magmar":
      Bruno();
    break;
    case "alakazam":
      alert("You lose, but didn't give up hope! You left for Victory Road to challenge and catch the Legendary Fire Bird Pokemon, MOLTRES.")
    break;
    case "gengar":
      alert("You lose, but didn't give up hope! You left for Victory Road to challenge and catch the Legendary Fire Bird Pokemon, MOLTRES.")
    break;
    case "chansey":
      alert("You lose, but didn't give up hope! You left for Victory Road to challenge and catch the Legendary Fire Bird Pokemon, MOLTRES.")
    break;
    case "lapras":
      alert("You lose, but didn't give up hope! You left for Victory Road to challenge and catch the Legendary Fire Bird Pokemon, MOLTRES.")
    break;
    case "dragonite":
      alert("You lose, but didn't give up hope! You left for Victory Road to challenge and catch the Legendary Fire Bird Pokemon, MOLTRES.")
    break;
  }
}

  function Bruno(){
      alert("Lorelei's Jynx was no match for magmar's Fire Blast!")
      alert("You move on to the Fighting Master Bruno")
    var Indigo2 = prompt("The 6 Pokemon you have are \n\nGENGAR, ALAKAZAM, MAGMAR, CHANSEY, LAPRAS and DRAGONITE. \n\nWhich will you choose to defeat Bruno?").toLowerCase();
    switch(Indigo2){
      case "alakazam":
      Agatha()
    break;
    case "magmar":
      alert("You lose, but didn't give up hope! You left for the Power Plant to challenge and catch the Legendary Thunder Bird Pokemon, ZAPDOS.")
    break;
    case "gengar":
      alert("You lose, but didn't give up hope! You left for the Power Plant to challenge and catch the Legendary Thunder Bird Pokemon, ZAPDOS.")
    break;
    case "chansey":
      alert("You lose, but didn't give up hope! You left for the Power Plant to challenge and catch the Legendary Thunder Bird Pokemon, ZAPDOS.")
    break;
    case "lapras":
      alert("You lose, but didn't give up hope! You left for the Power Plant to challenge and catch the Legendary Thunder Bird Pokemon, ZAPDOS.")
    break;
    case "dragonite":
      alert("You lose, but didn't give up hope! You left for the Power Plant to challenge and catch the Legendary Thunder Bird Pokemon, ZAPDOS.")
    break;
  }
}

  function Agatha(){
      alert("Bruno's Machamp was masterfully confused into submission by Alakazam's Psychic!")
      alert("You move on to the Guru of Ghosts, Agatha")
    var Indigo3 = prompt("The 6 Pokemon you have are \n\nGENGAR, ALAKAZAM, MAGMAR, CHANSEY, LAPRAS and DRAGONITE. \n\nWhich will you choose to defeat Agatha?").toLowerCase();
    switch(Indigo3){
      case "gengar":
      Lance()
    break;
    case "magmar":
      alert("You lose, but didn't give up hope! You left for the Seafoam Islands to challenge and catch the Legendary Ice Bird Pokemon, ARTICUNO.")
    break;
    case "alakazam":
      alert("You lose, but didn't give up hope! You left for the Seafoam Islands to challenge and catch the Legendary Ice Bird Pokemon, ARTICUNO.")
    break;
    case "chansey":
      alert("You lose, but didn't give up hope! You left for the Seafoam Islands to challenge and catch the Legendary Ice Bird Pokemon, ARTICUNO.")
    break;
    case "lapras":
      alert("You lose, but didn't give up hope! You left for the Seafoam Islands to challenge and catch the Legendary Ice Bird Pokemon, ARTICUNO.")
    break;
    case "dragonite":
      alert("You lose, but didn't give up hope! You left for the Seafoam Islands to challenge and catch the Legendary Ice Bird Pokemon, ARTICUNO.")
    break;
    }
  }
  function Lance(){
      alert("It was a creepy and tough battle...but the only way to take down a Ghost Pokemon is with another one.  In the end, your Gengar overpowered hers.")
      alert("You move on to the Champion of Dragons, Lance")
    var Indigo4 = prompt("The 6 Pokemon you have are \n\nGENGAR, ALAKAZAM, MAGMAR, CHANSEY, LAPRAS and DRAGONITE. \n\nWhich will you choose to defeat Lance?").toLowerCase();
    switch(Indigo4){
      case "dragonite":
      Blue()
    break;
    case "magmar":
      alert("You lose, but didn't give up hope! You left for the Cerulean Cave to challenge and catch the All Powerful, MEWTWO.")
    break;
    case "alakazam":
      alert("You lose, but didn't give up hope! You left for the Cerulean Cave to challenge and catch the All Powerful, MEWTWO.")
    break;
    case "chansey":
      alert("You lose, but didn't give up hope! You left for the Cerulean Cave to challenge and catch the All Powerful, MEWTWO.")
    break;
    case "lapras":
      alert("You lose, but didn't give up hope! You left for the Cerulean Cave to challenge and catch the All Powerful, MEWTWO.")
    break;
    case "gengar":
      alert("You lose, but didn't give up hope! You left for the Cerulean Cave to challenge and catch the All Powerful, MEWTWO.")
    break;
  }
}

function Blue(){
alert("You did it!! Blue, the Pokemon League Champion and Prof. Oak emerge from the Hall of Fame with a Master Ball and a map for where to locate ARTICUNO, ZAPDOS, MOLTRES and MEWTWO. You take the Master Ball and notice it moving slightly.  You toss it open and out comes a Mew! Mew rests on your shoulders and guides out the front door as the new Pokemon League Champion!")
}
