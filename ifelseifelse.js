//1
var prompt = require('prompt-sync')();

let number = prompt('Enter single digit number : ');
if(number == 1)
{
    console.log("One");
}
else if(number == 2)
{
    console.log("Two");
}
else if(number == 3)
{
    console.log("Three");
}
else if(number == 4)
{
    console.log("Four");
}
else if(number == 5)
{
    console.log("Five");
}
else if(number == 6)
{
    console.log("Six");
}
else if(number == 7)
{
    console.log("Seven");
}
else if(number == 8)
{
    console.log("Eight");
}
else if(number == 9)
{
    console.log("Nine");
}
else if(number == 0)
{
    console.log("Zero");
}
else
{
    console.log("Not a single digit number");
}

//2
let weekdaynum = prompt('Enter week day number : ');

if(weekdaynum == 1)
{
    console.log("Monday");
}
else if(weekdaynum == 2)
{
    console.log("Tuesday");
}
else if(weekdaynum == 3)
{
    console.log("Wednesday");
}
else if(weekdaynum == 4)
{
    console.log("Thursday");
}
else if(weekdaynum == 5)
{
    console.log("Friday");
}
else if(weekdaynum == 6)
{
    console.log("Saturday");
}
else if(weekdaynum == 7)
{
    console.log("Sunday");
}
else
{
    console.log("Incorrect week day number");
}

//3
let num = prompt("Enter a number : ");
let unit = num % 10;
let tens = Math.floor(num/10) % 10;
let hundreds = Math.floor(num/100) % 10;
let thousands = Math.floor(num/1000) % 10;
console.log("Units : " + unit + " Tens : " + tens + " Hundreds : " + hundreds + " Thousands : " + thousands);

//4
let number1 = prompt("Enter first number : ");
let number2 = prompt("Enter second number : "); 
let number3 = prompt("Enter third number : ");

let a = parseInt(number1, 10);
let b = parseInt(number2, 10);
let c = parseInt(number3, 10);

let op1 = a + (b * c);
console.log("a + b * c = " + op1);

let op2 = (a % b) + c;
console.log("a % b + c = " + op2);

let op3 = c + (a / b);
console.log("c + a / b = " + op3);

let op4 = (a * b) + c;
console.log("a * b + c = " + op4);

if(a > b && a > c)
{
    console.log("Maximum number : " + a);
}
else if(b > a && b > c)
{
    console.log("Maximum number : " + b);
}
else
{
    console.log("Maximum number : " + c);
}

if(a < b && a < c)
{
    console.log("Minimum number : " + a);
}
else if(b < a && b < c)
{
    console.log("Minimum number : " + b);
}
else
{
    console.log("Minimum number : " + c);
}
