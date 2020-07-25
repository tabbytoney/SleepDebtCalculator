//Creates a calculator of how much sleep you need/got this week. Works with shortened arrow functions, switch, const variables. 

/*const getSleepHours = (day) => {
  if(day === 'monday') {
    return 8;
  } else if(day === 'tuesday') {
    return 7;


    else
  }
} Doing this via if, else if. */

const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 7
      break;
    case 'sunday':
      return 8
      break;
      default:
      return "Error!"
  }
};

//these numbers are the amount of hours of sleep you got each night. 



//console.log(getSleepHours('tuesday')); returns 7

const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

  /*Could also write ^ :
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11; */

console.log(getSleepHours('monday')); //returns 8 for Monday
console.log(getActualSleepHours()); //returns 51 for sum

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7; 
};

/* could also write ^:
const getIdealSleepHours = idealHours => idealHours *7; */

//console.log(getIdealSleepHours()); returns 52.2 = 7.5 * 7

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

/* could also write ^:
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(8);
  ....
  }; */


if(actualSleepHours === idealSleepHours) {
  console.log("You got the ideal amount of sleep! You're a unicorn!");
} else if(actualSleepHours > idealSleepHours) {
  console.log("You got " + (idealSleepHours - actualSleepHours) + " hours more sleep this week than needed!");
} else if(actualSleepHours < idealSleepHours) {
  console.log("Get some rest! You need " + (idealSleepHours - actualSleepHours) + " more hours of sleep for this week.");
}
  else {
    console.log("Error! Something went wrong.");
  }
};

calculateSleepDebt();


