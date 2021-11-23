function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return `This one is on me!`
  } else if (feet <= 2500 && feet > 2000 ) {
    return `I will gladly take your thirty bucks.`}
    else if (feet >400 && feet <= 2000) {
      return 'Your total is 20'
  } else if (feet > 2500) {
    return `No can do.`
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return ( (city === `NYC`) ? `Ok, sounds good.` : `No go.` )
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case `generous`:
      return  `Thank you so much.`
      break;
    case `not as generous`:
      return `Thank you.`
      break;
    default:
      return `Bye.`
  }
}