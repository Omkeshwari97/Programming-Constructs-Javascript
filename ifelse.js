//1
let number1 = Math.floor(100 + Math.random() * 900);
let number2 = Math.floor(100 + Math.random() * 900);
let number3 = Math.floor(100 + Math.random() * 900);
let number4 = Math.floor(100 + Math.random() * 900);
let number5 = Math.floor(100 + Math.random() * 900);

console.log(number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5);

if(number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5)
{
    console.log("Maximum number: " + number1);
}
else if(number2 > number1 && number2 > number3 && number2 > number4 && number2 > number5)
{
    console.log("Maximum number: " + number2);
}
else if(number3 > number1 && number3 > number2 && number3 > number4 && number3 > number5)
{
    console.log("Maximum number: " + number3);
}
else if(number4 > number1 && number4 > number2 && number4 > number3 && number4 > number5)
{
    console.log("Maximum number: " + number4);
}
else
{
    console.log("Maximum number: " + number5);
}

if(number1 < number2 && number1 < number3 && number1 < number4 && number1 < number5)
{
    console.log("Minimum number: " + number1);
}
else if(number2 < number1 && number2 < number3 && number2 < number4 && number2 < number5)
{
    console.log("Minimum number: " + number2);
}
else if(number3 < number1 && number3 < number2 && number3 < number4 && number3 < number5)
{
    console.log("Minimum number: " + number3);
}
else if(number4 < number1 && number4 < number2 && number4 < number3 && number4 < number5)
{
    console.log("Minimum number: " + number4);
}
else
{
    console.log("Minimum number: " + number5);
}

//2
var prompt = require('prompt-sync')();

let day = prompt('Enter day : ');
let month = prompt('Enter month : ');

if(month == 'March' && day >= 20 && day <=31)
{
    console.log("true");
}
else if(month == 'April' && day >= 1 && day <=30)
{
    console.log("true");
}
else if(month == 'May' && day >= 1 && day <=31)
{
    console.log("true");
}
else if(month == 'June' && day >= 1 && day <=20)
{
    console.log("true");
}
else
{
    console.log("false");
}

//3
function leapyear(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

let year = prompt('Enter year : ');
console.log(leapyear(year));

//4
let flip = Math.floor(1 + Math.random() * 2);
console.log("Flip value : " + flip);
if(flip == 1)
{
    console.log("Heads");
}
else
{
    console.log("Tails");
}
