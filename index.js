function scuberGreetingForFeet(somevalue){
  if (somevalue<= 400) {return 'This one is on me!';}
  if (400<somevalue && somevalue<2000) {return 'That will be twenty bucks.';}
  if ( somevalue>2500) {return  'No can do.';}else {return 'I will gladly take your thirty bucks.';}
}

function ternaryCheckCity(city) {
  return city === "NYC"? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
    switch (tip) {
      case 'generous':
          return 'Thank you so much.';
      case 'not as generous':
          return 'Thank you.';
      case 'thanks for everything':
          return 'Bye.';
    }
  }
