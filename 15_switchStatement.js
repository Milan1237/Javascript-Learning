let day = new Date().getDay();
let dayName ; 
console.log(day);


switch(day){
    case 1 : dayName = "Monday";
    break;
    
    case 2 : dayName = "Tuesday";
    break; //stops the executing the code inside swich-case once it got the matched case

    case 3 : dayName = "Wednessday";
    break ;

    case 4 : dayName = "Thursday";
    break ; 

    case 5 : dayName = "Friday";
    break;

    case 6: dayName = "Saturday"
    break;

    case 7: dayName = "Sunday";
    break ;

    default: dayName = "Invalid day"
    break;
}

console.log(`Today is ${dayName}`);