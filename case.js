//1
var prompt = require('prompt-sync')();

let number = prompt('Enter single digit number : ');

switch (parseInt(number)) 
{
    case 1: console.log("One"); 
            break;
    
    case 2: console.log("Two"); 
            break;

    case 3: console.log("Three"); 
            break;
    
    case 4: console.log("Four"); 
            break;
    
    case 5: console.log("Five"); 
            break;

    case 6: console.log("Six"); 
            break;
    
    case 7: console.log("Seven"); 
            break;
    
    case 8: console.log("Eight"); 
            break;
    
    case 9: console.log("Nine"); 
            break;
    
    case 0: console.log("Zero"); 
            break;

    default: console.log("Incorrect single diigit number");
             break;
}

//2
let weekdaynum = prompt('Enter week day number : ');

switch (parseInt(weekdaynum)) 
{
    case 1: console.log("Monday"); 
            break;
    
    case 2: console.log("Tuesday"); 
            break;

    case 3: console.log("Wednesday"); 
            break;
    
    case 4: console.log("Thursday"); 
            break;
    
    case 5: console.log("Friday"); 
            break;

    case 6: console.log("Saturday"); 
            break;
    
    case 7: console.log("Sunday"); 
            break;

    default: console.log("Incorrect week day number"); 
             break;
}

//4
let choice  = prompt('Enter choice: 1. Feet to Inch 2. Feet to Meter 3. Inch to Feet 4. Meter to feet');
let num = prompt('Enter a number to convert : ');

switch (parseInt(choice)) 
{
    case 1: console.log(num +" Feet = " + parseInt(num) * 12 + " Inch"); 
            break;
    
    case 2: console.log(num +" Feet = " + parseInt(num) * 0.3048 + " Meter"); 
            break;
            
    case 3: console.log(num +" Inch = " + parseInt(num) / 12 + " Feet"); 
            break;
    
    case 4: console.log(num +" Meter = " + parseInt(num) * 3.281 + " Feet"); 
            break;

    default:
        break;
}
