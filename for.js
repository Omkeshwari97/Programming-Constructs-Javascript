//1
var prompt = require('prompt-sync')();

let number1 = prompt('Enter a number : ');

for(var i = 0; i <= parseInt(number1); i++)
{
    console.log("2 raise to " + i + " = " + Math.pow(2, i));
}

//2
let number2 = prompt('Enter a number : ');
let harmonicnum = 0;

for(var i = 1; i <= parseInt(number2); i++)
{
    harmonicnum = harmonicnum + 1/i;
}
console.log(number2 + "th harmonic number = " + harmonicnum);

//3
let number3 = parseInt(prompt('Enter a number to check prime: '));
let flag = true;

if(number3 <= 1)
{
    flag = false;
}
else if(number3 == 2)
{
    flag = true;
}
else if(number3 % 2 ==0)
{
    flag = false;
}

for(var i = 3; i <= Math.sqrt(number3); i++)
{
    if(number3 % i == 0)
    {
        flag = false;
        break;
    }
}

if(flag == true)
{
    console.log(number3 + " is a prime number");
}

if(flag == false)
{
    console.log(number3 + " is not a prime number");
}

//4
let number4 = parseInt(prompt('Enter a number to determine prime numbers in range: '));

if(number4 == 2)
{
    console.log(2);
}

for(var i = 3; i <= number3; i++)
{
    if(number3 % i != 0)
    {
        console.log(i);
    }
}

//5
let number5 = prompt('Enter a number to find factorial: ');
let factorial = 1;

for(var i = 1; i <= parseInt(number5); i++)
{
    factorial = factorial * i;
}
console.log("Factorial of " + number5 + " = " + factorial);

//6
let number6 = parseInt(prompt('Enter a number to find prime factors: '));

while(number6 % 2 == 0)
{
    console.log(2);
    number6 = number6 / 2;
}

for(var i = 3; i <= Math.sqrt(number6); i = i + 2)
{
    while(number6 % i == 0)
    {
        console.log(i);
        number6 = number6 / i;
    }
}

if(number6 > 2)
{
    console.log(number6);
}