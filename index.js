function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    return "This one is on me!"
  } if (someNumber >= 2000 && someNumber <2500) {
    return "I will gladly take your thirty bucks."
  } else if (someNumber >= 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  let response = (city === "NYC") ? "Ok, sounds good." : "No go."
  return response
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much." 
      break;
    case "not as generous":
      return "Thank you." 
      break;
    default:
      return "Bye." 
  }
}
